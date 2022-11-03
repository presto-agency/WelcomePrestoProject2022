import ghpages from "gulp-gh-pages"

export const git = () => {
  return app.gulp.src('./../wp-content/themes/project/docs/**/*')
    .pipe(
      ghpages()
    )
}