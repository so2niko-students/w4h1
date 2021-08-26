import { UserListModel } from "./user-list-model.js";
import { UserListView } from "./user-list-view.js";

export class UserListController{
    constructor(){
        this.model = new UserListModel();
        this.view = new UserListView(this.onSearch);
    }
    
    init = () => {
        this.model.getData().then(this.view.renderUsers);
    }

    onSearch = ev => {
        const searchText = this.view.getSearch();
        const searchedUsers = this.model.findUsers(searchText);
        this.view.renderUsers(searchedUsers);
    }
}