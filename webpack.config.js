'use strict'
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output:{ 
        filename : 'bundle.js',
        path: path.resolve('./src/js'),
        
    },
    watch:true,

    devtool: 'source-map',

    module:{}
}