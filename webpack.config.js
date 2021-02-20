const path = require('path');
module.exports = {
  mode: "development",
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]

      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      { 
        test: /\.js|jsx$/, 
        use: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  },
  /* 全局挂载插件 */
  /* plugins:[new webpack.IgnorePlugin(/\.\/jquery-last.js$/),//排除不想打包进去的插件
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ], */
  devServer: {
    contentBase: './dist',
    inline: true
  },
};