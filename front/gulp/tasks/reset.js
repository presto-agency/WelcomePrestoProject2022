import {deleteAsync} from "del";

export const reset = () => {
  return deleteAsync(app.path.clean)
}

// export const cleanPhp = () => {
//   return deleteAsync([`${app.pathForBackTask.build.root}/*.php`], {force: true});
// }
