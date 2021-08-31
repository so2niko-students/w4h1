import { UserListModel } from "./user-list-model.js";
import { UserListView } from "./user-list-view.js";

export class UserListController{
    constructor(onClickUserEdit){
        this.model = new UserListModel();
        this.view = new UserListView(this.onSearch);
        this.onClickUserEdit = onClickUserEdit;
    }
    
    init = (onClickUserEdit) => {
        this.model.getData().then(data => this.view.renderUsers(data, this.onClickUserEdit));
    }

    onSearch = ev => {
        const searchText = this.view.getSearch();
        const searchedUsers = this.model.findUsers(searchText);
        this.view.renderUsers(searchedUsers, this.onClickUserEdit);
    }
    
}