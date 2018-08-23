let gulp = require('gulp');
let sassdoc = require('sassdoc');
//let sass = require('gulp-sass');
let rename = require('gulp-rename');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

gulp.task('minify-dist', function () {
   let plugins = [
      autoprefixer({ browsers : ['last 1 version'] }),
      cssnano()];
   return gulp.src('build/bumble-bee.css')
              .pipe(postcss(plugins))
              .pipe(rename(function (path) {
                 path.dirname += ""; //a new sub dir under the dest dir
                 path.basename += ".min";
                 path.extname = ".css"; //file extension to use
              }))
              .pipe(gulp.dest('dist'));
});

gulp.task('all', function () {
   return gulp.src('src/**/*.scss')
              .pipe(sassdoc({
                               dest     : 'docs',
                               verbose  : true,
                               display  : {
                                  access : ['public', 'private'],
                                  alias  : true,
                                  //watermark: true,
                               },
                               groups   : {
                                  'undefined' : 'Ungrouped',
                               },
                               basePath : '#',
                            }));
});

gulp.task('coreStyles', function () {
   return gulp.src('src/core/**/*.scss')
              .pipe(sassdoc({
                               dest     : 'docs',
                               verbose  : true,
                               display  : {
                                  access          : ['public', 'private'],
                                  alias           : true,
                                  watermark       : true,
                                  shortcutIcon    : 'src/images/b-bcss.png',
                                  descriptionPath : 'README.md'
                               },
                               groups   : {
                                  'undefined' : 'Core',
                                  'border'    : 'Border',
                                  'HnW'       : 'Height and Width'
                               },
                               basePath : 'https://github.com/archX3/bumble-bee-css',
                            }));
});