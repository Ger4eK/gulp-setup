const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

// Шляхи до наших початкових файлів
const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js/',
  },
};

// Для очистки папки dist
const clean = () => {
   return del(['dist']);
 };

 // Для обробки стилів
const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: 'main',
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
};


//! gulp clean/styles...
exports.clean = clean;
exports.styles = styles;
