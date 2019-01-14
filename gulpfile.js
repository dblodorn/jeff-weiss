var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    fs          = require('fs'),
    sftp        = require('gulp-sftp'),
    config      = require('./deploy.json');

var watchFolder = './dist/**/*';

gulp.task('default', function () {
  gulp.src(watchFolder)
    .pipe(sftp({
      host: config.sftp_host,
      user: config.sftp_user,
      remotePath: config.sftp_directory,
      password: config.sftp_password
    }));
});
