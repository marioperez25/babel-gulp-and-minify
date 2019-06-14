const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-babel-minify");
const clean = require('gulp-clean');

gulp.task('babel', function () {
  return gulp.src('src/js/*/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('babel-minify', function () {
  return gulp.src('dist/js/*/*.js')
  .pipe(minify({
    mangle: {
      keepClassName: false
      /*
      More Settings // Mas Settings
      https://babeljs.io/docs/en/babel-plugin-minify-mangle-names#options
      */
    }
  }))
  .pipe(gulp.dest('temp/js'))
});

gulp.task('delete-dist', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('delete-temp', function () {
  return gulp.src('temp', {read: false})
    .pipe(clean());
});
