/* eslint-disable no-param-reassign */
// vue.config.js

const path = require('path');

// eslint-disable-next-line no-unused-vars
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  configureWebpack: (config) => {
    // if (process.env.NODE_ENV === 'production') {
    //   // 为生产环境修改配置...
    // } else {
    //   // 为开发环境修改配置...
    // }
    // 变更入口文件
    config.entry.app = './examples/main.js';
    // 增加文件编译
    // config.module.rules.push({
    //   test: /\.js$/,
    //   include: [resolve('examples'), resolve('src')],
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //     },
    //   ],
    // });
    // 增加Markdown文档编译
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader',
        },
        {
          loader: 'vue-markdown-loader/lib/markdown-compiler',
          options: {
            raw: true,
          },
        },
      ],
    });
  },
};
