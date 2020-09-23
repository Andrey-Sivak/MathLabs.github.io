'use strict';

import {Validation} from "./validationClass";

class Modal {

    constructor(options) {
        this.modal = 0;
        this.ANIMATION_SPEED = 350;
        this.closing = false;
        this.body = document.body;
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modal.dataset.close = 'true';
        this.modal.insertAdjacentHTML('afterBegin', `<div class="modal_window">
          <span class="modal_close" id="modal-close" data-close="true">&times;</span>
          <div class="modal_body">
            <p class="modal_caption">Запись на онлайн занятия</p>
            <form action="#" class="modal_form" id="modal-form">
              <div class="modal_form__formgroup">
                <label for="modal-name" class="modal_form__label"></label>
                <input type="text"
                       name="modal-name"
                       id="modal-name"
                       required
                       class="modal_form__input"
                       placeholder="Ваше имя">
              </div>
              <div class="modal_form__formgroup">
                <label for="modal-phone" class="modal_form__label"></label>
                <input type="text"
                       name="modal-phone"
                       id="modal-phone"
                       required
                       class="modal_form__input"
                       placeholder="+7 (___)___-__-__">
              </div>
              <div class="modal_form__formgroup">
                <label for="modal-email" class="modal_form__label"></label>
                <input type="text"
                       name="modal-email"
                       id="modal-email"
                       required
                       class="modal_form__input"
                       placeholder="Ваш e-mail">
              </div>
              <button type="submit" class="purple-btn" id="modal-btn">Оставить заявку</button>
            </form>
            <p class="modal_note">Нажимая кнопку я соглашаюсь с</p>
            <a class="modal_note__link">Условиями соглашения</a>
          </div>
        </div>`);
        document.body.appendChild(this.modal);
        return this.modal;
    }

    sendFormData() {
        const submitBtn = document.getElementById('modal-btn');
        const self = this;

        const validate = new Validation({
            submitBtn: 'modal-btn',
            name: 'modal-name',
            phone: 'modal-phone',
            email: 'modal-email'
        });

        validate.init();

        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if( validate.success ) {
                self.close();
            }
        });
    }

    listeners() {
        this.modal.addEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                this.close();
            }
        });
    }

    open() {
        this.createModal();

        setTimeout( () => {
            if( !this.closing ) {
                this.modal.classList.add('open');
            }
            this.body.classList.add('body-forbiddence-scroll');
        },10);

        this.listeners();
    }

    close() {
        this.closing = true;
        this.modal.classList.remove('open');
        this.modal.classList.add('modal-hide');
        setTimeout( () => {
            this.modal.classList.remove('modal-hide');
            this.destroy();
            this.closing = false;
        }, this.ANIMATION_SPEED);

        this.body.classList.remove('body-forbiddence-scroll');
    }

    destroy() {
        this.modal.parentNode.removeChild(this.modal);
        this.modal.removeEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                this.close();
            }
        });
    }

    init() {
        this.open();
        this.sendFormData();
    }
}

export { Modal };