const { join } = require('path')

module.exports = {
	entry: join(__dirname, '../src/index.js'),
	node: {
		__dirname: true,
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': join(__dirname, '../src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader', // compiles Sass to CSS, using Node Sass by default
				],
				exclude: /node_modules/,
			},
		],
	},
}
