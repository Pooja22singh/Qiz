const path = require("path");//reuired for concatenating paths as paths can be system dependent
//and we are using absolute path Therefore thats a bad idea to concatenate using simple +
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname);
module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: ["babel-polyfill","./src/app.js"],
    output: {
      path: path.join(__dirname, "public","dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use:[
            {
              loader:'css-loader',
              options:{
                sourceMap:true
              }
             },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            }
            ]
          })
        }
      ]
    },
    plugins:[CSSExtract],
    devtool: isProduction? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath:'/dist/'
    }
  }

}

//loader --Its a plugin of webpack using this we tell webpack how to treat or what to have to be c0nverted Eg : We need to tell webpack t
//to whenever it sees a js file so use babel to convert JSX to normal JS using presets of React and also convert
//ES6 to ES5 so this loader is a plugin which helps webpack to do the above
//babel core - helps webpack to run babel from cli and it will use the prsests also-- not very clear
// babel loader as mentioned earlier os a plugin which teaches webpack how to run babel when it sees some type of file.