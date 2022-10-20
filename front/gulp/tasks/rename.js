import renameFile from "gulp-rename"

export const copyHtmlToPhp = () => {
  return app.gulp.src(`${app.pathForBackTask.src.root}/*.html`)
    .pipe(renameFile(path => {
      path.extname = ".php"
    }))
    .pipe(app.gulp.dest(app.pathForBackTask.build.root))
}