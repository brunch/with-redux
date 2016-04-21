exports.config = {
  hot: true,

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    }
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015', 'react']}
  }
};
