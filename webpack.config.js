module.exports = {
    module: {
      rules: [
        {
          test: /\.mp4$/,
          use: 'raw-loader',
        },
      ],
    },
  };