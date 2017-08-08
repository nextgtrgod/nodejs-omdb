const gulp			= require('gulp');
const path 			= require('path');
const postcss		= require('gulp-postcss');
const autoprefixer	= require('autoprefixer');
const minifyCSS		= require('gulp-minify-css');
const uglifyCSS		= require('gulp-uglifycss');
const stylus		= require('gulp-stylus');


let filepath = {
	src: {
		styles: path.join(__dirname, 'public', 'src', 'styles', '*.styl')
	},
	build: {
		styles: path.join(__dirname, 'public', 'build', 'styles')
	}
};


gulp.task('styles', () => {
	gulp.src(filepath.src.styles)
		.pipe(stylus({
			'include css': true
		}))
		.pipe(postcss([ autoprefixer() ]))
		.pipe(minifyCSS())
		.pipe(uglifyCSS())
		.pipe(gulp.dest(filepath.build.styles))
});


gulp.task('default', () => {
	gulp.watch( filepath.src.styles, 	['styles']);
});