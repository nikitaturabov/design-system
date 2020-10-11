const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const PATHS = {
	src: path.join(__dirname, "/src"),
	dist: path.join(__dirname, "/dist"),
	assets: "assets/",
};

module.exports = {
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "scss",
			patterns: [path.resolve(__dirname, "./src/assets/scss/_main.scss")],
		},
	},
	configureWebpack: {
		entry: "./src/main.js",
		plugins: [
			new CopyWebpackPlugin([{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` }]),
			new SpriteLoaderPlugin(),
		],
		module: {
			rules: [
				{
					test: /\.svg$/,
					loader: "svg-sprite-loader",
					options: {
						extract: true,
						spriteFilename: "/img/sprite.svg",
						runtimeCompat: true,
					},
				},
				{
					// Fonts
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
					},
				},
			],
		},
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === "production") {
			config.plugin("html").tap(args => {
				args[0].minify.removeAttributeQuotes = false;
				return args;
			});
		}
	},
};
