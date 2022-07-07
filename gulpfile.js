const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('copyJS', function() {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('public/js/'));
});

gulp.task('copyCSS', function() {
    return gulp.src('app/css/*.css')
        .pipe(gulp.dest('public/css/'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.series('copyCSS'));
    gulp.watch('app/js/*.js', gulp.series('copyJS'));
});

gulp.task('default', gulp.parallel('watch', 'serve'));
