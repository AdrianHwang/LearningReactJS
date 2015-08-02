var path = require('path');
var webpack =  require('webpack');

var config = {
	context: path.join(__dirname, './public'),
	entry: {
		client: ['./scripts/routes']
	},
	devtool: "source-map",
	output: {
		path: path.join(__dirname, '/public/build'),
		publicPath: '/build',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
	},
	module: {
		loader:[
		{
			test: /\.dust$/,
			loader: 'dust'
		},
		{
			test: /\.jsx/,
			loader: 'jsx-loader?harmony',
		}
		]
	},
	resolve: {
		extension: ['','.js', '.jsx', '.dust']
	},
	externals: {
		backbone: 'Backbone',
		underscore: '_',
		jquery: 'jQuery',
		'dust-core': 'dust'
	},
	plugins: [],

};

module.exports = config;
webpack(config, function(err, stats){
	if(err){
		console.log('bunle error');
	}else{
		console.log('bundle complete');
	}

})