const gulp = require('gulp');
const less = require('less');
const del = require('del');

const clean = () => {
  return del(['dist']);
};

exports.clean = clean;
