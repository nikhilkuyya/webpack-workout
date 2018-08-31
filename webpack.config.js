module.exports = {
 "resolve":{
     "root": path.resolve(__dirname),
     "alias":{
        
     },
     "extensions":[".js",".css",".html"]
 },
 "modules":{
     "rules":[
         {
             "test":/\.(html)$/,
             "use":{
                 "loader":"html-loader"
             }
         }
     ]
 }
}