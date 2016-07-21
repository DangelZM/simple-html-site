var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('webserver', function() {
    connect.server({
        port:3016,
        root: __dirname,
        livereload: true
    });
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./css/*.css'], ['css']);
});

gulp.task('default', ['webserver', 'watch']);