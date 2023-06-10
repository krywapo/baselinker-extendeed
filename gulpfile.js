const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssnano');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');

gulp.task('compile-less', function() {  
    gulp.src('assets/css/partials/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            cascade: false,
            flexbox: true,
            add: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css/partials'));
}); 

gulp.task('minify-css', () => {
    gulp.src([
        'assets/css/partials/styles.css',
    ])
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer())
        .pipe(cssmin({
            discardComments: {removeAll: true},
            safe: true
        }))
        .pipe(gulp.dest('assets/css/min'));
});

gulp.task('minify-js', () => {
    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'))
});

gulp.task('default', ['minify-css', 'minify-js'], function () {
    gulp.watch(['assets/css/partials/*.less'], ['compile-less']);
    gulp.watch(['assets/css/partials/styles.css'], ['minify-css']);
    gulp.watch(['assets/js/scripts.js'], ['minify-js']);
    gulp.watch(['assets/js/google-map.js'], ['minify-js']);
});
