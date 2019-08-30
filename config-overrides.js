const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  disableEsLint,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBabelPresets,
  addBabelPlugins,
  watchAll
} = require('customize-cra')

const antVar = require('./src/style/ant-theme.js') //antd变量覆盖
const globalVar = require('./src/style/global-val.js') //全局变量
module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['@api']: path.resolve(__dirname, 'src/api')
  }),
  // disableEsLint(),
  addDecoratorsLegacy(),
  addBabelPresets('@babel/preset-react'),
  addBabelPlugins(
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import'
  ),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    sourceMap:true,
    modifyVars:antVar,
    globalVars: globalVar
  }),
  watchAll()
)
