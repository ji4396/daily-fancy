import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import fs from 'fs'
import dotenv from 'dotenv' //从文件中读取环境变量
import { resolve } from 'path'

try {
  // 根据环境变量加载环境变量文件
  const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
  // 根据获取的key给对应的环境变量赋值
  for (const key in (file)) {
    process.env[key] = file[key]
  }
} catch (e) {
  console.error(e)
}

// console.log('process.env.VITE_SERVE_URL',process.env.VITE_SERVE_URL);
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    '/api': {
      target: process.env.VITE_SERVE_URL, // 后端服务实际地址
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  css: {
    preprocessorOptions: {//混入全局less
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/less/common.less')}";`
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    styleImport({//按需引入vant
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  //打包配置 生成对应的文件夹
  build:{
    rollupOptions:{
      output:{
        assetFileNames:'[ext]/[name].[hash].[ext]',
        chunkFileNames:'js/[name].[hash].js',
        entryFileNames:'js/[name].[hash].js'

      }
    }
  }
})
