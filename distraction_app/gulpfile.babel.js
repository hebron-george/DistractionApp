import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';

const plugins = loadPlugins();

import eventWebpackConfig from './event/webpack.config';
import popupWebpackConfig from './src/popup/webpack.config';

gulp.task('event-page', (cb) => {
	webpack(eventWebpackConfig, (err, stats) => {
		if(err) throw new plugins.util.PluginError('webpack', err);

		plugins.util.log('[webpack]', stats.toString());

		cb();
	})
});

gulp.task('popup-page', (cb) => {
	webpack(popupWebpackConfig, (err, stats) => {
		if(err) throw new plugins.util.PluginError('webpack', err);

		plugins.util.log('[webpack]', stats.toString());

		cb();
	})
});

gulp.task('build', ['popup-page'], () => {
	console.log("Starting build...");
});

gulp.task('default', ['build']);