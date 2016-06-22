module.exports = {
	entry: './app/App.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	}
}