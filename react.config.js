{
  module.exports = {
    // source of files
    source: 'src',
    // output path
    outputPath: 'dist',
    // port to be used in development
    // will be set in webpack-dev-server
    port: 8080,
    // hostname to be used in development
    // will be set in webpack-dev-server
    host: 'localhost',
    // all enviroments to be set in process.env
    nodeEnv: {
      commentsExample: 'Comment from Node Enviroments',
      booleanValueExample: true,
      numericValueExample: 37,
    },
    // all enviroments to be set in HTMLWebpackPlugin
    // available in HTML thru <%= htmlWebpackPlugin.options.propertyName %>
    htmlEnv: {
      htmlComments: 'Comment from HTML Enviroment',
    },
  };
}