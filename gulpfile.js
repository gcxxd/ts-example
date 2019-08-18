var gulp = require('gulp');
var browserify = require('browserify');
var souce = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var paths = {
    pages: ['src/*.html']
};

var watchedBrowseify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/index.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify))

gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

function bundle() {
    return watchedBrowseify
    .bundle()
    .pipe(souce('bundle.js'))
    .pipe(gulp.dest('dist'));
}

gulp.task('default', gulp.series('copy-html', bundle));
watchedBrowseify.on('update', bundle);

// gulp.task('default', gulp.series('copy-html', function() {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/index.ts'],
//         cache: {},
//         packageCache: {}
//     })
//     .plugin(tsify)
//     .bundle()
//     .pipe(souce('bundle.js'))
//     .pipe(gulp.dest('dist'))
// }))

// gulp.task('default', () => {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest('dist'))
// })