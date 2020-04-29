module.exports = {
  '/people': {
    target: 'https://pokeapi.co/api/v2/pokemon',
    secure: false,
    pathRewrite: {
      '^/people': '',
    },
    changeOrigin: true,
  },
};
