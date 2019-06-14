const path = require('path');

module.exports = {
    entry: './src/js/entry.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dest/js/')
    }
};


