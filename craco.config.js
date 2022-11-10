const {name} = require('./package')

module.exports = {
  webpack: {
    configure (webpackConfig) {
      webpackConfig.output.library = `${name}-[name]`
      webpackConfig.output.libraryTarget = 'umd'
      webpackConfig.output.globalObject = 'window'
      return webpackConfig
    }
  },
  devServer (devServerConfig) {
    const config = devServerConfig

    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    config.historyApiFallback = true
    config.hot = false
    config.liveReload = false

    return config
  }

  // devServer: _ => {
  //   const config = _;

  //   config.headers = {
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   config.historyApiFallback = true;
  //   config.hot = false;
  //   config.liveReload = false;

  //   return config;
  // },
  // output: {
  //   library: `${name}-[name]`,
  //   libraryTarget: 'umd',
  //   globalObject: 'window'
  // }
}
