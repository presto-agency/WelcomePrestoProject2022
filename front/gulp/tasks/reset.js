import {deleteAsync} from "del";

export const reset = () => {
  return deleteAsync([`${app.path.build.php}/*.php`, `!${app.path.build.php}functions.php`, `${app.path.clean}/assets`], {force: true});
}
