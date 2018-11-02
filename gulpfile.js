var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");

gulp.task('default',['minify', 'images']);

gulp.task('minify', () => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('images', () =>
    gulp.src('static/assets/uploads/**')
        .pipe(gulpNewer("static/assets/uploadsOut"))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 60
            }),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 600,
            height : 600,
            crop : true,
            upscale : false
          }))
        .pipe(gulp.dest('static/assets/uploadsOut'))
);
