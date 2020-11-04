'use strict';

class CheckEmpty extends Error {
    constructor( message ) {
        super( message );
        this.name = 'CheckEmpty';
    }
}

class NameValidationError extends Error {
    constructor( message ) {
        super( message );
        this.name = 'NameValidationError';
    }
}

class CheckLength extends Error {
    constructor( message ) {
        super( message );
        this.name = 'CheckLength';
    }
}

class CheckEmail extends  Error {
    constructor( message ) {
        super( message );
        this.name = 'CheckEmail';
    }
}

class CheckPhone extends  Error {
    constructor( message ) {
        super( message );
        this.name = 'CheckPhone';
    }
}

class Validation {
    constructor( options ) {
        this.submitBtn = document.getElementById(options.submitBtn);
        this.inputs = {
            name: options.name,
            phone: options.phone,
            email: options.email,
            childName: options.childName,
            childClass: options.childClass
        };

        this.errors = [];

        this.promocode = false;
        this.subscription = '';

        this.success = false;
    }

    fields(obj) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'string') {
                obj[key] = document.getElementById(value);
            } else if ( value instanceof Array ) {
                obj[key] = [];
                value.forEach( function (item) {
                    obj[key].push( document.getElementById(item) );
                })
            }
        }
    }

    checkEmpty( inputValue ) {
        if( inputValue === '' ) {
            throw new CheckEmpty( 'Это поле обязательно для заполнения' );
        }

        return inputValue;
    }

    checkLength( inputValue, minLength, maxLength ) {
        const inputLength = inputValue.length;

        if( inputLength < minLength ) {
            throw new CheckLength( `Поле должно содержать не менее ${minLength} символов` );
        }
        if( inputLength > maxLength ) {
            throw new CheckLength( `Количество символов превышает ${maxLength}. Введите корректные данные` );
        }

    }

    checkName( input ) {
        const inputValue = input.value;

        this.checkEmpty( inputValue );
        this.checkLength( inputValue, 2, 50 );

        const regExp = /^[а-яА-ЯЁё]+$/;

        if( !regExp.test( inputValue ) ) {
            throw new NameValidationError( 'Допустимы только буквы русского алфавита' );
        }

        return inputValue;
    }

    checkPhone( input ) {
        const inputValue = input.value;

        this.checkEmpty( inputValue );

        const numberLength = 16;
        const regExp = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;

        if( !regExp.test( inputValue ) || inputValue.length !== numberLength ) {
            throw new CheckPhone( 'Некорректный номер телефона' );
        }

        return inputValue;
    }

    maskPhone( input ) {
        if ( input instanceof Array ) {
            input.forEach( function (item) {
                new IMask( item, {
                    mask: '+{7}(000)000-00-00',
                });
            })
        } else {
            new IMask( input, {
                mask: '+{7}(000)000-00-00',
            });
        }
    }

    checkEmail( input ) {
        const inputValue = input.value;

        this.checkEmpty( inputValue );
        this.checkLength( inputValue, 3, 50);

        const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

        if( !regExp.test(inputValue) ) {
            throw new CheckEmail( 'Некорректный формат Email' );
        }

        return inputValue;
    }

    checkClass( input ) {
        const inputValue = input.value;

        this.checkEmpty( inputValue );

        return inputValue;
    }


    createWarningMessage(  message ) {
        const paragraph = document.createElement('p');
        paragraph.className = 'warning';
        paragraph.innerHTML = message;
        return paragraph;
    }

    catchErrors( input, e, ...args ) {
        for( const argsItem of args ) {
            if( e instanceof argsItem ) {
                const messageElement = this.createWarningMessage( e.message );
                input.parentElement.appendChild( messageElement );
                input.classList.add('warn');
            }
        }
    }

    switchInputs( input, elem ) {

        switch( input ) {
            case 'name':
                try {
                    this.checkName( elem );
                } catch (e) {
                    this.catchErrors( elem, e, CheckEmpty, CheckLength, NameValidationError );
                    this.errors.push(e);
                }
                break;
            case 'childName':
                try {
                    this.checkName( elem );
                } catch (e) {
                    this.catchErrors( elem, e, CheckEmpty, CheckLength, NameValidationError );
                    this.errors.push(e);
                }
                break;
            case 'phone':
                try {
                    this.checkPhone( elem );
                } catch (e) {
                    this.catchErrors( elem, e, CheckEmpty, CheckPhone );
                    this.errors.push(e);
                }
                break;
            case 'email':
                try {
                    this.checkEmail( elem );
                } catch (e) {
                    this.catchErrors( elem, e, CheckEmpty, CheckLength, CheckEmail );
                    this.errors.push(e);
                }
                break;
            case 'childClass':
                try {
                    this.checkClass( elem );
                } catch (e) {
                    this.catchErrors( elem, e, CheckEmpty );
                    this.errors.push(e);
                }
                break;
        }
    }

    check() {
        const self = this;

        for( const input in this.inputs ) {
            const elem = this.inputs[input];

            if( !elem ) {
                continue;
            }

            if( elem instanceof Array ) {
                elem.forEach( function (item) {
                    self.switchInputs( input, item );
                })
            } else {
                self.switchInputs( input, elem );
            }

        }

        if( this.errors.length === 0 ) {
            this.success = true;
        }
    }

    init() {
        this.fields( this.inputs );
        this.maskPhone( this.inputs.phone );
        this.submitBtn.addEventListener('click',  (e) => {
            e.preventDefault();

            const warningMessages = document.getElementsByClassName('warning');
            let invalidInputs = document.getElementsByClassName('warn');

            if( warningMessages[0] ) {
                while( warningMessages.length ) {
                    warningMessages[0].parentNode.removeChild( warningMessages[0] );
                }
            }

            if( invalidInputs ) {
                invalidInputs = Array.prototype.slice.call(invalidInputs);
                for( let i = 0, length = invalidInputs.length; i < length; i++ ) {
                    if( invalidInputs[i].classList.contains('warn') ) {
                        invalidInputs[i].classList.remove('warn');
                    }
                }
            }


            this.check();
        });

        return this.success;
    }
}

export { Validation };