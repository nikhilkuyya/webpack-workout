const path = require('path');
module.exports = {
 "entry": './src/js/frameworkHandler.js',
 "output": {
    path: path.join(__dirname, "dist"),
    filename: 'index.js'
 },
 "module":{
     "noParse": [/.elm$/],
     "rules":[
         {
             "test":/\.(html)$/,
             "use":{
                 "loader":"html-loader"
             }
         },
         {
            test:    /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use : [
                {loader:  'elm-webpack-loader'}]
         }
     ]
 }
}