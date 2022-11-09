export const copyForProd = () => {
	return app.gulp.src(
		[
			`${app.path.src.prod}**/*.*`,
			`!${app.path.src.prod}/.github`,
			`!${app.path.src.prod}/front`,
			`!${app.path.src.prod}/gulp`,
			`!${app.path.src.prod}/wp-content/themes/**/*.html`,
			`!${app.path.src.prod}/.editorconfig`,
			`!${app.path.src.prod}/.gitignore`,
			`!${app.path.src.prod}/gulpfile.js`,
			`!${app.path.src.prod}/package.json`,
			`!${app.path.src.prod}/README.md`,
		])
		.pipe(app.gulp.dest(app.path.build.prod))
}
