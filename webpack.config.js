// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  webpackConfig['devServer'] = {
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
  return webpackConfig;
};
