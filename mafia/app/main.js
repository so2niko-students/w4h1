import { UserListController } from "./user-list/user-list-controller.js";
import { UserEditController } from "./user-edit/user-edit-controller.js";

const userEdit = new UserEditController();
const userList = new UserListController(userEdit.onClickUserEdit);

userList.init();
