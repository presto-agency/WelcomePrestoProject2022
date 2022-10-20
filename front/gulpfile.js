import gulp from "gulp";
import {path, pathForBackTask} from "./gulp/config/path.js"
import {plugins} from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  pathForBackTask: pathForBackTask,
  gulp: gulp,
  plugins: plugins
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import {otfToTtf, ttfToWoff} from "./gulp/tasks/fonts.js"
import {svgSprite} from "./gulp/tasks/svgSprite.js"
import {copyHtmlToPhp} from "./gulp/tasks/rename.js";
// import {cleanPhp} from "./gulp/tasks/reset.js";
import {copyAssetsCss, copyAssetsJs, copyAssetsFonts, copyAssetsImg} from "./gulp/tasks/copy.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.svgicons, svgSprite);
}

export {otfToTtf}

const mainTasks = gulp.parallel(copy, html, scss, js, images, svgSprite, ttfToWoff);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const back = gulp.series(/*cleanPhp*/ gulp.parallel(copyHtmlToPhp, copyAssetsCss, copyAssetsJs, copyAssetsFonts, copyAssetsImg));

export {dev}
export {build}
export {back}

gulp.task("default", dev);