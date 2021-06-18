const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT

// Objeto de configuracion para webpack
module.exports = {
  name: "express-server", // nombre de la configuracion
  
  entry: "./src/index.ts",
  target: "node", 
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts)$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
}
