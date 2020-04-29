module.exports = {
  '/people': {
    target: 'https://swapi.co/api/people',
    secure: false,
    pathRewrite: {
      '^/people': '',
    },
    changeOrigin: true,
  },
};
