const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const htmlmin = require('gulp-htmlmin');
const del = require('del');

// Шляхи до наших початкових файлів
const paths = {
  html: {
    src: 'src/*.html',
    dest: 'dist/',
  },
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js/',
  },
  images: {
    src: 'src/images/**',
    dest: 'dist/images',
  },
};

// Для очистки папки dist
const clean = () => {
  return del(['dist/*', '!dist/images']);
};

// Для обробки розмітки
const html = () => {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
};

// Для обробки стилів
const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        basename: 'main',
        suffix: '.min',
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
};

// Для обробки скриптів
const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
};

// Для обробки фото
const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest(paths.images.dest));
};

// Для слідкування за змінами в папках scripts i styles
const watch = () => {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
};

// Для об'єднання всіх потрібних функцій в одну команду
const build = gulp.series(
  clean,
  html,
  gulp.parallel(styles, scripts, images),
  watch
);

//! gulp clean/styles...
exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;

//! exports.default спрацює просто при написанні в консольці gulp
exports.default = build;
