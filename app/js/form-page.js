'use strict';

function checkboxes( checkboxWrapClass, activeClass ) {
    if( !document.getElementsByClassName(checkboxWrapClass)[0] ) {
        return;
    }
    let items = document.getElementsByClassName(checkboxWrapClass);

    items = Array.prototype.slice.call(items);

    items.forEach( function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if( this.classList.contains( activeClass ) ) {
                return;
            }

            const input = item.getElementsByClassName('reg-form_checkbox__checkbox')[0];


            items.forEach( function (elem) {
                if( elem.classList.contains( activeClass ) ) {
                    elem.classList.remove( activeClass );
                    input.checked = false;

                    /*if( item.classList.contains('base') ) {
                        removeBlock( '.registration_info__promocode' );
                    }*/
                } else {
                    const coastWrap = document.getElementById('registration_info__coast');
                    let oldCoast = elem.getElementsByClassName('reg-form_checkbox__old-coast')[0].innerHTML;
                    oldCoast = oldCoast.substring( 0, 7 );
                    let newCoast = elem.getElementsByClassName('reg-form_checkbox__coast')[0].innerHTML;
                    newCoast =  newCoast.substring( 0, 7 );
                    changeCoast( coastWrap, oldCoast, newCoast );
                    elem.classList.add( activeClass );
                    input.checked = true;

                    /*if( item.classList.contains('premium') ) {
                        addBlock( '.registration_info__promocode' );
                    }*/
                }
            });
        })
    })
}

function changeCoast( wrap, oldCoastValue, newCoastValue ) {
    if( !wrap ) {
        return;
    }

    wrap.children[0].innerHTML = newCoastValue;
    wrap.children[1].innerHTML = oldCoastValue;

}

function addBlock( selector ) {
    const block = document.querySelector( selector );
    if( !selector ) {
        return;
    }

    block.style.display = 'block';
}

function removeBlock( selector ) {
    const block = document.querySelector( selector );
    if( !selector ) {
        return;
    }

    block.style.display = 'none';
}

export { checkboxes };
