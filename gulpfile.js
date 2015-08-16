var gulp      = require('gulp'),
    csslint   = require('gulp-csslint'),
    minifyCss = require('gulp-minify-css'),
    jshint    = require('gulp-jshint'),
    jsmin     = require('gulp-jsmin'),
    rename    = require('gulp-rename');

gulp.task('default', ['csslint', 'minify-css', 'lint', 'minify-js']);

gulp.task('csslint', function(){
  gulp.src("css/style.css")
      .pipe(csslint())
      .pipe(csslint.reporter());
});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src('./js/+(main|page).js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify-js', function () {
    gulp.src('./js/+(main|page).js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
