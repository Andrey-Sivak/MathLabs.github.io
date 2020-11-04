'use strict';

import {Validation} from "./validationClass";

class ModalWindow {

    constructor(options) {
        this.modal = 0;
        this.ANIMATION_SPEED = 350;
        this.closing = false;
        this.body = document.body;
        this.members = 0;
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modal.dataset.close = 'true';
        this.modal.insertAdjacentHTML('afterBegin', `<div class="modal-window">
                  <span class="modal_close" id="modal-close" data-close="true">&times;</span>
                  <p class="modal__caption">Регистрация команды</p>
                  <p class="modal__text-note">Выберите количество участников вашей команды:</p>
                  <div class="members">
                    <span class="members_item active">2</span>
                    <span class="members_item">3</span>
                    <span class="members_item">4</span>
                    <span class="members_item">5</span>
                    <span class="members_item">6</span>
                    <span class="members_item">7</span>
                    <span class="members_item">8</span>
                    <span class="members_item">9</span>
                    <span class="members_item">10</span>
                    <span class="members_item">11</span>
                    <span class="members_item">12</span>
                  </div>
                  <p class="modal__text-note">Укажите данные участников:</p>
                  <form class="registration_form" action="#" id="modal-form">
                  
                  </form>
                  <a href="#" id="modal-btn" class="btn purple-btn">Зарегистрировать</a>
                </div>`);
        document.body.appendChild(this.modal);
        this.createMembersField( 2 );
        this.members = 2;
        return this.modal;
    }

    selectMembersAmount() {
        const self = this;
        const membersBtns = [...document.querySelectorAll('.members_item')];

        membersBtns.forEach( function (item) {
            item.addEventListener('click', function (e) {
                this.classList.add('active');
                let newVal = Number(this.innerHTML);
                let diff = newVal - self.members;
                if ( diff > 0 ) {
                    self.createMembersField( newVal );
                    self.sendFormData();
                } else if( diff < 0 ) {
                    self.removeMembersField( newVal );
                }
                self.members = Number(this.innerHTML);
                membersBtns.forEach(function (el) {
                    if( el.classList.contains('active') && el !== item ) {
                        el.classList.remove('active');
                    }
                })
            })
        });
    }

    slider() {
        let resize = false;
        const sliderClass = 'owl-carousel';
        const wrap = document.getElementById('modal-form');
        window.addEventListener('load', function (e) {
            if( document.documentElement.clientWidth < 765 ) {
                resize = true;
            }
        });
        window.addEventListener('resize', function (e) {
            if( document.documentElement.clientWidth < 765 && !resize ) {
                resize = true;
            }

            if (resize) {
                wrap.classList.add(sliderClass);

                $('#modal-form').owlCarousel({
                    loop: true,
                    items: 1,
                    dots: true,
                    navContainerClass: 'personal_slider__arrows',
                    navClass: [
                        'personal_slider__arr personal_slider__arr-lt;',
                        'personal_slider__arr personal_slider__arr-rt;'
                    ],
                });
            }
        })
    }

    removeMembersField( int ) {
        let items = document.getElementsByClassName('registration_form_item');
        const wrap = document.getElementById('modal-form');

        for(let i = this.members; i > int; i--) {
            wrap.removeChild(items[i - 1]);
        }
    }

    createMembersField( int ) {
        for(let i = this.members + 1; i <= int; i++) {
            const wrap = document.createElement('div');
            wrap.classList.add('registration_form_item');
            wrap.insertAdjacentHTML('afterBegin', `<div class="num">
                        <span>${i}</span>
                      </div>
                      <div class="reg-form_formgroup">
                        <label for="${i}-reg-name" class="reg-form_label"></label>
                        <input type="text"
                               name="${i}-reg-name"
                               id="${i}-reg-name"
                               required
                               class="reg-form_input"
                               placeholder="Имя">
                      </div>
                      <div class="reg-form_formgroup reg-form_formgroup__child-class">
                        <label for="${i}-reg-child-class" class="reg-form_label"></label>
                        <input type="text"
                               name="${i}-reg-child-class"
                               id="${i}-reg-child-class"
                               required
                               class="reg-form_input"
                               placeholder="Класс"
                               readonly
                               value="">
                        <ul class="reg-form_formgroup__child-class--classes">
                          <li class="reg-form_formgroup__child-class--class">7</li>
                          <li class="reg-form_formgroup__child-class--class">8</li>
                          <li class="reg-form_formgroup__child-class--class">9</li>
                          <li class="reg-form_formgroup__child-class--class">10</li>
                          <li class="reg-form_formgroup__child-class--class">11</li>
                        </ul>
                      </div>
                      <div class="reg-form_formgroup">
                        <label for="${i}-reg-phone" class="reg-form_label"></label>
                        <input type="text"
                               name="${i}-reg-phone"
                               id="${i}-reg-phone"
                               required
                               class="reg-form_input"
                               placeholder="+7 (___)___-__-__">
                      </div>`);
            document.getElementById('modal-form').appendChild(wrap);

        }
    }

    sendFormData() {
        const submitBtn = document.getElementById('modal-btn');
        const wrap = document.getElementsByClassName('modal-window')[0];
        const formgroups = wrap.getElementsByClassName('registration_form_item');
        const names = [];
        const phones = [];
        const childClasses = [];
        for (let i = 1; i <= formgroups.length; i++) {
            names.push( `${i}-reg-name` );
            phones.push( `${i}-reg-phone` );
            childClasses.push( `${i}-reg-child-class` );
        }
        const self = this;

        const validate = new Validation({
            submitBtn: 'modal-btn',
            name: names,
            phone: phones,
            childClass: childClasses
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

        this.members = 0;
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
        this.selectMembersAmount();
        this.slider();
        this.sendFormData();
    }
}

export { ModalWindow };