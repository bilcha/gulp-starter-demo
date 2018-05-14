var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({
      stream: true
  }));
});
gulp.task('css', function(){
    return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({
        stream: true
    }));
})

gulp.task('watch', function(){
    gulp.watch('./src/*.html', ['html'])
    gulp.watch('./src/sass/style.scss', ['css'])
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});
gulp.task('start', ['server', 'watch']);