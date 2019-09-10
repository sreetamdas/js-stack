const path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js"],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
	},
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		libraryTarget: "umd",
	},
};
