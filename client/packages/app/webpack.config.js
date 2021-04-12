const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      home: './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js?[hash]',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@test-assignment/ws-service': path.resolve(
          __dirname,
          '../../packages/ws-service/src'
        ),
        '@test-assignment/diff-text': path.resolve(
          __dirname,
          '../../packages/diff-text/src'
        ),
      },
      symlinks: false,
    },

    devtool: 'source-map',
    target: 'web',
    devServer: {
      compress: true,
      historyApiFallback: true,
      https: false,
      hot: false,
      port: 8081,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1.0',
        },
        title: 'Test assignment - Shadi',
      }),
    ],
  };
};
