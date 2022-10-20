export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}

export const copyAssetsCss = () => {
  return app.gulp.src(`${app.pathForBackTask.src.root}/css/**/*.css`)
    .pipe(app.gulp.dest(`${app.pathForBackTask.build.root}/assets/css`))
}

export const copyAssetsJs = () => {
  return app.gulp.src(`${app.pathForBackTask.src.root}/js/**/*.js`)
    .pipe(app.gulp.dest(`${app.pathForBackTask.build.root}/assets/js`))
}

export const copyAssetsFonts = () => {
  return app.gulp.src(`${app.pathForBackTask.src.root}/fonts/**/*.*`)
    .pipe(app.gulp.dest(`${app.pathForBackTask.build.root}/assets/fonts`))
}

export const copyAssetsImg = () => {
  return app.gulp.src(`${app.pathForBackTask.src.root}/img/**/*.*`)
    .pipe(app.gulp.dest(`${app.pathForBackTask.build.root}/assets/img`))
}
