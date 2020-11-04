'use strict';

import {checkboxes} from "./form-page";
import {Validation} from "./validationClass";
import {Modal} from "./modalWindow";
import {ModalWindow} from "./modal"

window.addEventListener('load', function () {

    function selectClass() {
        const select = document.querySelector('#select');
        if (!select) {
            return;
        }

        const hideContent = select.getElementsByClassName('hide')[0];

        select.addEventListener('click', () => {
            hideContent.classList.toggle('active');
        });


        const val = select.getElementsByClassName('value')[0];

        hideContent.addEventListener('click', (e) => {
            const target = e.target;
            val.innerHTML = target.innerHTML;
        });

        const nextBtn = document.getElementById('start-test');

        nextBtn.addEventListener('click', (e) => {
            if (val.innerHTML === 'Класс') {
                e.preventDefault();
            }
        })
    }

    selectClass();

    checkboxes('reg-form_checkbox', 'active');

    function slider( sliderClass ) {

        if( !document.getElementsByClassName(sliderClass)[0] ) {
            return;
        }

        $(`.${sliderClass}`).owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            navContainerClass: 'personal_slider__arrows',
            navClass: [
                'personal_slider__arr personal_slider__arr-lt;',
                'personal_slider__arr personal_slider__arr-rt;'
            ],
        });
    }

    slider('personal_slider' );
    slider('tasks__slider' );

    function showHideContent( arrayId ) {

        if( !document.getElementById(arrayId) ) {
            return;
        }

        let items = document.getElementById( arrayId ).children;

        items = Array.prototype.slice.call( items );

        items.forEach( function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                if( this.classList.contains('active') ) {
                    this.classList.remove('active');
                } else {
                    this.classList.add('active');
                }
            })
        })
    }

    showHideContent( 'programs' );
    showHideContent( 'q-a-wrap' );

    function getCoords(elem) { // кроме IE8-
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    function fadeInAnimate( elems ) {

        if( !document.getElementsByClassName(elems)[0] ) {
            return;
        }

        let items = document.getElementsByClassName( elems );
        items = Array.prototype.slice.call(items);

            window.addEventListener('scroll', function () {

                items.forEach( function (item, i) {

                    if( i === 0 ) {
                        return;
                    }
                    const scrolling = getCoords(item).top - window.innerHeight - item.offsetHeight / 2;
                    if( window.pageYOffset > scrolling ) {
                       if( !item.classList.contains('animate__fadeInUp') ) {
                           item.classList.add('animate__fadeInUp');
                       }
                    } else {
                       if( item.classList.contains('animate__fadeInUp') ) {
                           item.classList.remove('animate__fadeInUp');
                       }
                    }
                })
            })
    }

    fadeInAnimate( 'how-we-preparing_item');

    $('#to-subscription').click( function () {
        $('html, body').animate({
            scrollTop: $('#subscription').offset().top
        }, 1000);
    });


    const registerForm = document.getElementById('registration_form');
    if( registerForm ) {
        const validation = new Validation({
            submitBtn: 'sbmt-btn',
            name: 'reg-name',
            phone: 'reg-phone',
            email: 'reg-email',
            childName: 'reg-child-name',
            childClass: 'reg-child-class',
        });

        validation.init();
    }

    const intensiveForm = document.getElementById('intensive-form');
    if ( intensiveForm ) {
        const validation = new Validation({
            submitBtn: 'sbmt-btn',
            name: 'reg-name',
            childClass: 'reg-child-class',
            phone: 'reg-phone',
        });

        validation.init();
    }

    const testForm = document.getElementById('complete-test');
    if (testForm) {
        const validation = new Validation({
            submitBtn: 'complete-test-submit',
            name: 'name',
            phone: 'phone',
            email: 'email',
        });

        validation.init();

        const btn = document.getElementById('complete-test-submit');
        btn.addEventListener('click', function (e) {
           const link = this.querySelector('a').getAttribute('href');
           if ( validation.init() ) {
               window.location.href = link;
           }
        });
    }

    function modalWindow() {
        const modal = new Modal();
        const btn = document.getElementById('open-modal');
        if( !btn ) {
            return;
        }

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            modal.init();
        })
    }

    modalWindow();

    function childClass(wrap) {
        let elem = null;
        if( !wrap ) {
            elem = document.getElementsByClassName('reg-form_formgroup__child-class')[0];
        } else  {
            elem = [...wrap.getElementsByClassName('reg-form_formgroup__child-class')];
        }

        if( !elem ) {
            return;
        }

        if( elem instanceof Array ) {
            elem.forEach( function (item) {
                addListener(item);
            })
        } else {
            addListener(elem);
        }

        function addListener(el) {

            const input = el.querySelector('input');

            el.addEventListener('click', function (e) {
                e.preventDefault();

                if( this.classList.contains('active') ) {
                    this.classList.remove('active');

                } else {
                    this.classList.add('active');

                    const itemsWrap = document.getElementsByClassName('reg-form_formgroup__child-class--classes')[0];
                    itemsWrap.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = e.target;

                        input.value = target.innerHTML;
                    })
                }
            })
        }

    }

    childClass();

    (function registrationTeam() {
        const modal = new ModalWindow();
        const btns = [...document.querySelectorAll('.team-registration')];

        btns.forEach( function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                modal.init();
                childClass( document.getElementsByClassName('modal-window')[0] );
            })
        })
    })();

});
