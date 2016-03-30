var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    jasmine = require('gulp-jasmine');

require('coffee-script/register')

gulp.task('js', function(){
  gulp.src('app/src/javascripts/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('public/js'));
});

gulp.task('css', function(){
  gulp.src('app/src/styles/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  gulp.watch('app/src/javascripts/**/*.coffee', ['js']);
  gulp.watch('app/src/styles/**/*.sass', ['css']);
});

gulp.task('default', function(cb){
  runSequence(['css', 'js'], 'watch', cb)
});

gulp.task('test', function(){
  gulp.src('app/tests/**/*.coffee').
    pipe( jasmine() )
});
