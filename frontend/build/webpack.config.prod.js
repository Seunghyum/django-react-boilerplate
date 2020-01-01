const base = require('./webpack.config.base')
const { join } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(base, {
	mode: 'production',
	output: {
		filename: '[name].bundle.js',
		path: join(__dirname, '../dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../public/index.html',
			showErrors: false,
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
					exclude: /node_modules/,
				},
			],
		},
	},
})
