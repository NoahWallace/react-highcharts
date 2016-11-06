'use strict'
let gulp = require('gulp');
let del = require('del');
let gutil = require('gulp-util');
let ts = require('gulp-typescript');
let rename = require('gulp-rename');
let replace = require('gulp-replace');

let tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('clean-lib', function () {
    del(['lib']);
});
gulp.task('lib', function () {
    let tsResult = gulp.src('./src/**/*.{ts,tsx,js}', {base: 'src'})
        .pipe(tsProject())
        .on('error', function () {
            let displayErr = gutil.colors.red('err');
            gutil.log(displayErr);
            this.emit('end');
        });
    return ([
        tsResult.dts.pipe(gulp.dest('lib')),
        tsResult.js.pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/^src\/?/, '');
        })).pipe(gulp.dest('lib'))
    ])
});
gulp.task('default', ['clean-lib', 'lib'])
