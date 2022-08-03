// postcss.config.js // .postcssrc.js
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // rootValue: 37.5, 允许使用数字或函数，使用函数可作判断
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*']
        }
    }
}