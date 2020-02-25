const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		index: "index.html",
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.png$/,
				loader: "file-loader",
				options: {
					outputPath: "assets",
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, "css-loader"
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: [ "transform-class-properties" ]
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles[contenthash].css"
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "TRIPLE K",
			filename: "index.html",
			meta: {
				description: "portfolio"
			}
		}),
		new CopyPlugin([
			{ from: 'src/assets', to: 'assets' }
		])
	]
};