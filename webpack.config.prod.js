const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './source/index.js',
        synopsis: './source/synopsisPage.js'
        
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]_bundle.js'
    }
}