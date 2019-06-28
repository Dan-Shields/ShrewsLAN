const proxy = process.env.VUE_APP_API_PROXY_TARGET
  ? {
    '^/api': {
      target: process.env.VUE_APP_API_PROXY_TARGET
    }
  }
  : undefined;

module.exports = {
  devServer: {
    proxy
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
