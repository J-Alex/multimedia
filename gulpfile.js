var sass = require('gulp-sass');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('scss', function() {
    gulp.src('./res/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./multimedia/assets/css/'));
});

gulp.task('build', ['scss',], function(){
    console.log('Build complete');
});

gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./multimedia"
        }
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch('./res/**/*.*', ["build"]);
    gulp.watch('./multimedia/**/*.*').on('change', browserSync.reload);
})