import gitpages from "gh-pages"

export const git = () => {
  return app.gulp.src(`${app.path.build}/**/*`)
    .pipe(gitpages.publish(
      `${app.path.build}/docs`, {
        branch: "front-end"
      }
    ))
}

// export const git = () => {
//   return app.gulp.src(`${app.path.build}/**/*`)
//     .pipe(
//       ghpages({branch: 'front-end'})
//     )
// }