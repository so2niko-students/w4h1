export class UserEditView{
    constructor(onCloseModal){
        this.modal.bg.dom.addEventListener('click', onCloseModal);
        this.modal.panel.dom.addEventListener('click', onCloseModal);
    }

    modal = {
        bg : {
            dom : document.querySelector('.modal_bg_overlay'),
            hide : ['ease-in', 'duration-200', 'opacity-0'],
            show : ['ease-out', 'duration-300', 'opacity-100']
        },
        panel : {
            dom : document.querySelector('.modal_panel'),
            hide : ['ease-in', 'duration-200', 'opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95'],
            show : ['ease-out', 'duration-300', 'opacity-100', 'translate-y-0', 'sm:scale-100']
        },
        title : {
            dom : document.querySelector('.modal_title'),
            hide : ['absolute'],
            show : ['overflow-y-auto', 'fixed'],
        }
    }

    hideModal = () => {
        this.modal.bg.dom.classList.remove(...this.modal.bg.show);
        this.modal.bg.dom.classList.add(...this.modal.bg.hide);

        this.modal.panel.dom.classList.remove(...this.modal.panel.show);
        this.modal.panel.dom.classList.add(...this.modal.panel.hide);

        this.modal.title.dom.classList.remove(...this.modal.title.show);
    }
    
    showModal = () => {
        this.modal.bg.dom.classList.remove(...this.modal.bg.hide);
        this.modal.bg.dom.classList.add(...this.modal.bg.show);

        this.modal.panel.dom.classList.remove(...this.modal.panel.hide);
        this.modal.panel.dom.classList.add(...this.modal.panel.show);

        this.modal.title.dom.classList.add(...this.modal.title.show);
    }




}