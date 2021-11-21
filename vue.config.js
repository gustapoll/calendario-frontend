module.exports = {
  publicPath: '/',
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/main.scss";`
      }
    }
  }
}
