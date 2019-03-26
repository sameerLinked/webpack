const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");	
const WorkboxPlugin = require('workbox-webpack-plugin');
var webpack = require('webpack');
var jquery = require('jquery');
 
module.exports = {
	
  entry: {
    'bundle.min.css': [
      path.resolve(__dirname, 'src/css/bootstrap.min.css'),
      path.resolve(__dirname, 'src/css/animate.min.css'),
	  path.resolve(__dirname, 'src/css/bootstrap-datepicker.min.css'),
	  path.resolve(__dirname, 'src/css/chosen.min.css'),
	  path.resolve(__dirname, 'src/css/customs-css.css'),
	  path.resolve(__dirname, 'src/css/customs-css2.css'),
	  path.resolve(__dirname, 'src/css/customs-css3.css'),
	  path.resolve(__dirname, 'src/css/customs-css4.css'),
	  path.resolve(__dirname, 'src/css/customs-css5.css'),
	  path.resolve(__dirname, 'src/css/font-awesome.min.css'),
	  path.resolve(__dirname, 'src/css/font-linearicons.css'),
	  path.resolve(__dirname, 'src/css/jquery.scrollbar.min.css'),
	  path.resolve(__dirname, 'src/css/jquery-ui.min.css'),
	  path.resolve(__dirname, 'src/css/magnific-popup.min.css'),
	  path.resolve(__dirname, 'src/css/ovic-mobile-menu.css'),
      path.resolve(__dirname, 'src/css/owl.carousel.min.css'),
	  path.resolve(__dirname, 'src/css/style.css')
    ],
    'bundle.js': [
      path.resolve(__dirname, 'src/index.js'),
	  path.resolve(__dirname, 'src/js/bootstrap.min.js'),
	  path.resolve(__dirname, 'src/js/bootstrap-datepicker.min.js'),
	  path.resolve(__dirname, 'src/js/chosen.min.js'),
	  path.resolve(__dirname, 'src/js/frontend.js'),
	  path.resolve(__dirname, 'src/js/jquery.plugin-countdown.min.js'),
	 // path.resolve(__dirname, 'src/js/jquery.scrollbar.min.js'),
	  path.resolve(__dirname, 'src/js/jquery.validate.min.js'),
	  path.resolve(__dirname, 'src/js/jquery-2.1.4.min.js'),
	  path.resolve(__dirname, 'src/js/jquery-countdown.min.js'),
	  path.resolve(__dirname, 'src/js/jquery-ui.min.js'),
	  path.resolve(__dirname, 'src/js/magnific-popup.min.js'),
	  path.resolve(__dirname, 'src/js/mobilemenu.min.js'),
	  path.resolve(__dirname, 'src/js/ovic-mobile-menu.js'),
	  path.resolve(__dirname, 'src/js/owl.carousel.min.js'),
	 path.resolve(__dirname, 'src/js/owl.thumbs.min.js'),
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  },
 optimization: {
    splitChunks: {
     chunks: 'all'
     }
   },
  watch: true,
  module: {
    rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
    },{
        test: /\.(jpe?g|png|gif|svg)$/i},
		{
     test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/],
    },{test: /.(ttf|otf|png|gif|eot|jpe?g|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]"
              }
            }
	}	]
  },
 plugins: [
    
    new ExtractTextPlugin({
     filename: 'bundle.min.css'
 }),
 new webpack.ProvidePlugin({
  $: 'jquery',
   "window.jQuery": "jquery",
  jQuery: 'jquery'
}),
 new WorkboxPlugin.GenerateSW({
     // these options encourage the ServiceWorkers to get in there fast 
       // and not allow any straggling "old" SWs to hang around
       clientsClaim: true,
       skipWaiting: true
     })
  ]
}