const path = require('path');

module.exports = {
    target: 'node',
    entry: [
      `${__dirname}/src/index.js`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: 'babel-loader',
            }
        ]
    }
}
