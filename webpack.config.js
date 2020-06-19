const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
};