# 缓存 #

-------

作者：Chenjunyi
链接：https://juejin.cn/post/6942264171870289956
来源：掘金

浏览器缓存(http 缓存) 是指浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。

#### 优点 ###
* 减少了冗余的数据传输，节省带宽，减少服务器压力
* 加快了客户端加载速度，提升用户体验。

## 强缓存 
强缓存不会向服务器发送请求，而是直接从缓存中读取资源，强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control，这两个头部分别是HTTP1.0和HTTP1.1的实现。

### Expires
Expires是HTTP1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回。 Expires 受限于本地时间，如果修改了本地时间，就会造成缓存失效。

### Cache-Control
 >Cache-Control 出现于 HTTP/1.1，常见字段是max-age，单位是秒，很多web服务器都有默认配置，优先级高于Expires，表示的是相对时间。

例如Cache-Control:max-age=3600 代表资源的有效期是 3600 秒。取的是响应头中的 Date，请求发送的时间，表示当前资源在 Date ~ Date +3600s 这段时间里都是有效的。Cache-Control 还拥有多个值：
* no-cache 不直接使用缓存，也就是跳过强缓存。
* no-store 禁止浏览器缓存数据，每次请求资源都会向服务器要完整的资源。
* public 可以被所有用户缓存，包括终端用户和 CDN 等中间件代理服务器。
* private 只允许终端用户的浏览器缓存，不允许其他中间代理服务器缓存。

>要注意的就是no-cache和no-store的区别，no-cache是跳过强缓存，还是会走协商缓存的步骤，而no-store是真正的完全不走缓存，所有资源都不会缓存在本地


## 协商缓存
当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的http状态为304并且会显示一个Not Modified的字符串。
协商缓存用的是【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】这两对Header来管理的。
>注意！！协商缓存需要配合强缓存使用，使用协商缓存需要先设置Cache-Control：no-cache或者pragma：no-cache来告诉浏览器不走强缓存

### Last-Modified、If-Modified-Since
这两个Header是HTTP1.0版本提出来的，两个字段配合使用。
Last-Modified 表示本地文件最后修改日期，浏览器会在请求头带上If-Modified-Since（上次返回的Last-Modified的值），服务器会将这个值与资源修改的时间匹配，如果时间不一致，服务器会返回新的资源，并且将 Last-Modified 值更新，作为响应头返回给浏览器。如果时间一致，表示资源没有更新，服务器返回 304 状态码，浏览器拿到响应状态码后从本地缓存中读取资源。
但Last-Modified有几个问题。

* 文件虽然被修改了，但最终的内容没有变化，这样文件修改时间还是会被更新
* 有的文件修改频率在秒以内，这时候以秒粒度来记录就不够了
* 有的服务器无法精确获取文件的最后修改时间。

所以出现了ETAG。

### ETag、If-None-Match
在HTTP1.1版本中，服务器通过 Etag 来设置响应头缓存标识。Etag 的值由服务端生成。在第一次请求时，服务器会将资源和 Etag 一并返回给浏览器，浏览器将两者缓存到本地缓存数据库。在第二次请求时，浏览器会将 Etag 信息放到 If-None-Match 请求头去访问服务器，服务器收到请求后，会将服务器中的文件标识与浏览器发来的标识进行对比，如果不相同，服务器返回更新的资源和新的 Etag ，如果相同，服务器返回 304 状态码，浏览器读取缓存。
![图片](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffc78ee5fd654037aa383500550c81d6~tplv-k3u1fbpfcp-watermark.awebp)

## 流程总结
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ff3c19866aa4db1aa62f462963bcdfa~tplv-k3u1fbpfcp-watermark.awebp)

总结这几个字段：

1. Cache-Control —— 请求服务器之前
2. Expires —— 请求服务器之前
3. If-None-Match (Etag) —— 请求服务器
4. If-Modified-Since (Last-Modified) —— 请求服务器



