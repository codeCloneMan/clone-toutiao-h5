# test-toutiao-h5

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 学习到的
1.https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a
    阿里iconfont网站，转换图标为css，然后引入

2.vant使用
    npm install vant@latest -v2 -S
    import Vant from 'vant'
    import 'vant/lib/index.css'
    Vue.use(Vant)

3.载入设置rem基础值
    npm install amfe-flexible
    import 'amfe-flexible'

4.载入插件postcss，用于转换单位为rem
    npm install amfe-flexible
    npm install postcss-pxtorem -D
    根目录配置（.postcssrc.js，现更新为postcss.config.js）
    配置：https://vant-ui.github.io/vant/#/zh-CN/advanced-usage#qi-ta-she-ji-gao-chi-cun 进阶用法复制
    重启项目（查看vant组件已转为rem,自己写的css也可转，但行内样式不可转）

5.载入axios
    npm install axios
    