module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_API_URL || 'http://lanbackend.localhost'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/global.scss";
        `
      }
    }
  }
};
