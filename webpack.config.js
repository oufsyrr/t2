const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Название выходного файла
    path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
  },
  devServer: {
    static: './dist', // Папка для статики
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Обработка CSS файлов
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
