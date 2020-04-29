module.exports = {
  '/exchange': {
    target: 'https://login.windows.net/',
    secure: false,
    pathRewrite: {
      '^/exchange': '',
    },
    changeOrigin: true,
  },
};
