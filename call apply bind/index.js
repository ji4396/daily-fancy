Array.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window;
    context.fn = this;
    let result;
    // 处理参数和 call 有区别
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn;
    return result
}

var obj = {
    name:'hello',
    run:function(){
        console.log(this.name,'this.name');
    }
}

obj.run()

var obj2 ={
    name:'world'
}

obj.run.call(obj2)






