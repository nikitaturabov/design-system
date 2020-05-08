const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PATHS = {
	src: path.join(__dirname, "/src"),
	dist: path.join(__dirname, "/dist"),
	assets: "assets/",
};

module.exports = {
	configureWebpack: {
		entry: "./src/main.js",
		plugins: [new CopyWebpackPlugin([{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` }])],

		module: {
			rules: [
				{
					// Fonts
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
					},
				},
				{
					// images / icons
					test: /\.(png|jpg|gif|svg)$/,
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
					},
				},
			],
		},
	},
};
