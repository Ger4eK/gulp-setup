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

// Для слідкування за змінами в папках scripts i styles
const watch = () => {
  gulp.watch(paths.styles.src, styles);
};

// Для об'єднання всіх потрібних функцій в одну команду
const build = gulp.series(clean, styles, watch);

//! gulp clean/styles...
exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

//! exports.default спрацює просто при написанні в консольці gulp
exports.default = build;
