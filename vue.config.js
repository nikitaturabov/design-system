const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const PATHS = {
	src: path.join(__dirname, "/src"),
	dist: path.join(__dirname, "/dist"),
	assets: "assets/",
};

function addStyleResource(rule) {
	rule
		.use("style-resource")
		.loader("style-resources-loader")
		.options({
			patterns: [path.resolve(__dirname, "./src/assets/scss/main.scss")],
		});
}

module.exports = {
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
			const types = ["vue-modules", "vue", "normal-modules", "normal"];
			types.forEach(type => addStyleResource(config.module.rule("stylus").oneOf(type)));
		}
	},
};
