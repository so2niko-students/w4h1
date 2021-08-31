import { UserEditView } from './user-edit-view.js'

export class UserEditController{
    constructor(){
        this.view = new UserEditView(this.onCloseModal);
    }

    onClickUserEdit = ev => {
        console.log('show modal', ev);
        this.view.showModal();

    }

    onCloseModal = ev => {
        this.view.hideModal();
    }
}