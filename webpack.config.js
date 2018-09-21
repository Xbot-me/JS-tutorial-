const path =require('path'); //for getting absulote dir path


const HtmlWebpackPlugin = require('html-webpack-plugin'); // add htmlwebpack plugin and then add it here 
//this plugin is for building html and importing js inside the index.html


//this is the main webpack config
module.exports ={

    //there are 4 core concept of webpack
    //1.entry point 2. output 3. loaders 4. plugins
    entry: ['babel-polyfill',
        './src/js/index.js'
    ], //this is entry point where we need to code


    //this is where the build data will be stored
    output: {

        path: path.resolve(__dirname, 'dist'), //absulote path for dist folder
        filename: 'js/bundle.js' //all js and css will be bundled in this file
    },
    //A node server for webpack
    devServer: {
        contentBase : './dist', //where the server will server the file
        
    },


    plugins :[ 
        new HtmlWebpackPlugin({ //html webpack plugin new instance
            filename : 'index.html', //which file should be written

            template: './src/index.html' //template file
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
};