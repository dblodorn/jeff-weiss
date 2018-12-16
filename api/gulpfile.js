var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    fs          = require('fs'),
    sftp        = require('gulp-sftp'),
    watch       = require('gulp-watch'),
    config      = require('./deploy.json');

var watchFolder = './gems-api/**/*';

/* Task Library - API */
gulp.task('api', function() {
  gulp.src(watchFolder)
    .pipe(sftp({
      host: config.sftp_host,
      user: config.sftp_user,
      remotePath: config.sftp_directory,
      passphrase: config.passphrase
    }));
});

gulp.task('default', function () {
  gulp.watch(watchFolder, ['api']);
});
