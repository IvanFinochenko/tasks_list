const path = require('path');

module.exports = {
	entry: './frontend/src/index.js',
	output: {
		path: path.join(__dirname, 'frontend', 'public', 'build'),
		publicPath: "build",
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	}
};