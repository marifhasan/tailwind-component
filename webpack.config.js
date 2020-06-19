const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/js/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
};