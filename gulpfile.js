let gulp = require('gulp');
let sassdoc = require('sassdoc');
let sass = require('gulp-sass');

gulp.task('all', function () {
   return gulp.src('src/**/*.scss')
              .pipe(sassdoc({
                               dest: 'docs',
                               verbose: true,
                               display: {
                                  access: ['public', 'private'],
                                  alias: true,
                                  //watermark: true,
                               },
                               groups: {
                                  'undefined': 'Ungrouped',
                               },
                               basePath: '#',
                            }));
});

gulp.task('coreStyles', function () {
   return gulp.src('src/core/**/*.scss')
              .pipe(sassdoc({
                               dest: 'docs',
                               verbose: true,
                               display: {
                                  access: ['public', 'private'],
                                  alias: true,
                                  //watermark: true,
                                  shortcutIcon: 'src/images/b-bcss.png',
                                  descriptionPath: 'README.md'
                               },
                               groups: {
                                  'undefined': 'Core',
                               },
                               basePath: 'https://github.com/archX3/bumble-bee-css',
                            }));
});