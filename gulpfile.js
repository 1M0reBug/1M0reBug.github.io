var gulp      = require('gulp'),
    csslint   = require('gulp-csslint'),
    minifyCss = require('gulp-minify-css'),
    jshint    = require('gulp-jshint'),
    jsmin     = require('gulp-jsmin'),
    rename    = require('gulp-rename'),
    data      = require('gulp-data'),
    Geopattern = require('geopattern'),
    fs         = require('fs'),
    jade       = require('gulp-jade');


gulp.task('default', ['generateJson', 'csslint', 'minify-css', 'lint', 'minify-js', 'templates']);

gulp.task('generateJson', function() {
    var skills = [
        "Java","C++","Javascript","Express","Perl","Shell", "Git", "Agility"
    ];
    var json = [];

    skills.forEach(function(item) {
        var pattern = Geopattern.generate(item);
        var translateContent = item.toLowerCase() + 'Content';
        var translateTitle = "";
        if(item === "Agility") {
            translateTitle = "agility";
        }
        json.push({background : pattern.toDataUri(), id : item.toLowerCase(), translateContent: translateContent, translateTitle: translateTitle, skill: item});
    });

    var toWrite = {"skills" : json};
    fs.writeFileSync('./js/skills.json', JSON.stringify(toWrite));
    console.log("\u2713 json file in place !");
});

gulp.task('csslint', function(){
  gulp.src("css/style.css")
      .pipe(csslint())
      .pipe(csslint.reporter());
});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public'));
});

gulp.task('lint', function() {
  return gulp.src('./js/+(main|page).js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify-js', function () {
    gulp.src('./js/+(main|page).js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public'));
});

gulp.task('templates', function() {
    return gulp.src('./index.jade')
        .pipe(data(function(file) {
            return require('./js/skills.json');
        }))
        .pipe(jade())
        .pipe(gulp.dest('.'));
});
