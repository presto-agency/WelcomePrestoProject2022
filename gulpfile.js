import gulp from "gulp";
import {path} from "./gulp/config/path.js"
import {plugins} from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins
}

import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import {otfToTtf, ttfToWoff} from "./gulp/tasks/fonts.js"
import {svgSprite} from "./gulp/tasks/svgSprite.js"
import {git} from "./gulp/tasks/git.js";
import {copyForProd} from "./gulp/tasks/copyForProd.js";
import {/*resetProd,*/ resetSomeFiles} from "./gulp/tasks/reset.js";

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.svgicons, svgSprite);
}

export {otfToTtf}
export {git}

const mainTasks = gulp.parallel(html, scss, js, images, svgSprite, ttfToWoff);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, git);
const production = gulp.series(/*resetProd, */copyForProd, resetSomeFiles);

export {dev}
export {build}
export {production}

gulp.task("default", dev);
