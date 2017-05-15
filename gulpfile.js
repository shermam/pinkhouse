var gulp = require('gulp');
var webserver = require('gulp-webserver');

//Task that will run when ask for the command 'gulp' at the root
gulp.task('default', ['serve']);


//Task to start a webserver
gulp.task('serve', ['build'], function () {
	gulp.src('dist')
    	.pipe(webserver({
			open: true,
			host : 'localhost'
		}));
});


//Task to build the project
gulp.task('build', function () {
	
	//TODO - clean build
	gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

