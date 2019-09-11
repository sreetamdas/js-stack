# Babel 7 + Webpack 4 + Eslint + Jest config 

## Webpack 4

```js
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
```

## Babel 7

```json
{
	"presets": [
		[
			"@babel/preset-env",
			{
				"targets": {
					"browsers": ["Chrome >= 55"]
				}
			}
		]
	],
	"plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
```

## Eslint

```json
{
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"extends": "eslint:recommended",
	"env": {
		"jest": true,
		"es6": true
	}
}
```

## package.json

```json
{
	"name": "js-stack",
	"version": "0.1.0",
	"description": "Boilerplate for JS Stack",
	"main": "index.js",
	"repository": "https://github.com/sreetamdas/js-stack",
	"author": "Sreetam Das <sreetamdas@gmail.com> (https://sreetamdas.github.io)",
	"license": "MIT",
	"private": false,
	"scripts": {
		"start": "webpack-dev-server --open --hot",
		"test": "jest --watch",
		"watch": "webpack --watch",
		"build": "webpack --mode=production"
	},
	"devDependencies": {
		"@babel/cli": "^7.6.0",
		"@babel/core": "^7.6.0",
		"@babel/plugin-proposal-object-rest-spread": "^7.5.5",
		"@babel/preset-env": "^7.6.0",
		"@types/jest": "^24.0.18",
		"babel-eslint": "^10.0.3",
		"babel-loader": "^8.0.6",
		"eslint": "6.1.0",
		"eslint-loader": "^3.0.0",
		"jest": "^24.9.0",
		"jest-cli": "^24.9.0",
		"webpack": "^4.39.3",
		"webpack-cli": "^3.3.8",
		"webpack-dev-server": "^3.8.0"
	},
	"dependencies": {}
}
```