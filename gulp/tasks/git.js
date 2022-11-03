import ghpages from "gulp-gh-pages"

export const git = () => {
  return app.gulp.src(`${app.path.buildFolder}/assets/**/*`)
    .pipe(
      ghpages()
    )
}