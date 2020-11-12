const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        {
          from: path.resolve(__dirname, 'node_modules/oracledb/build'),
          to: 'node_modules/oracledb/build',
        },
      ]),
    ],
}
