const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

module.exports = {
    entry: [
      `${__dirname}/src/client/index.js`,
    ],
    mode: process.env.NODE_ENV || 'development',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/public`,
      filename: 'public.js',
      publicPath: '/assets/',
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: 'babel-loader',
            },
            {
              test: /\.css$/,
              use: [ MiniCssExtractPlugin.loader, 
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          'postcss-preset-env',
                          {
                            // Options
                          },
                        ],
                      ],
                    },
                  },
                },
              ],
            },
            {
              test: /\.(scss|sass)$/,
              use: [ MiniCssExtractPlugin.loader,
                'css-loader', 
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          'postcss-preset-env',
                          {
                            // Options
                          },
                        ],
                      ],
                    },
                  },
                },
                'sass-loader'],
            }
        ]
    }
}
