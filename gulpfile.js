const gulp = require('gulp');
const less = require('less');
const del = require('del');

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

const clean = () => {
  return del(['dist']);
};

exports.clean = clean;
