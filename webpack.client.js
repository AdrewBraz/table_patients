module.exports = {
    entry: [
      `${__dirname}/src/client/index.js`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/public`,
      filename: 'public.js',
      publicPath: '/assets/',
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
