const base = require('./webpack.config.base')
const { join } = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	mode: 'development',
	stats: 'errors-only',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: join(__dirname, '../public/index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['css-loader'],
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		host: '0.0.0.0',
		contentBase: './dist',
		stats: {
			color: true,
		},
	},
})
