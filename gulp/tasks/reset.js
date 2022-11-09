import {deleteAsync} from "del";

export const reset = () => {
  return deleteAsync(`${app.path.clean}/assets`, {force: true});
}

// export const resetProd = () => {
// 	return deleteAsync(`${app.path.build.prod}`, {force: true});
// }

export const resetSomeFiles = () => {
	return deleteAsync(		[
		`${app.path.build.prod}/.github`,
		`${app.path.build.prod}/front`,
		`${app.path.build.prod}/gulp`,
		`${app.path.build.prod}/wp-content/themes/**/*.html`,
		`${app.path.build.prod}/.editorconfig`,
		`${app.path.build.prod}/.gitignore`,
		`${app.path.build.prod}/gulpfile.js`,
		`${app.path.build.prod}/package.json`,
		`${app.path.build.prod}/package-lock.json`,
		`${app.path.build.prod}/README.md`,
	], {force: true});
}
