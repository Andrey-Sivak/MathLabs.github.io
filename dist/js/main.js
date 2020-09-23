/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/form-page.js":
/*!*****************************!*\
  !*** ./app/js/form-page.js ***!
  \*****************************/
/*! exports provided: checkboxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkboxes\", function() { return checkboxes; });\n\n\nfunction checkboxes(checkboxWrapClass, activeClass) {\n  if (!document.getElementsByClassName(checkboxWrapClass)[0]) {\n    return;\n  }\n\n  let items = document.getElementsByClassName(checkboxWrapClass);\n  items = Array.prototype.slice.call(items);\n  items.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (this.classList.contains(activeClass)) {\n        return;\n      }\n\n      const input = item.getElementsByClassName('reg-form_checkbox__checkbox')[0];\n      items.forEach(function (elem) {\n        if (elem.classList.contains(activeClass)) {\n          elem.classList.remove(activeClass);\n          input.checked = false;\n          /*if( item.classList.contains('base') ) {\r\n              removeBlock( '.registration_info__promocode' );\r\n          }*/\n        } else {\n          const coastWrap = document.getElementById('registration_info__coast');\n          let oldCoast = elem.getElementsByClassName('reg-form_checkbox__old-coast')[0].innerHTML;\n          oldCoast = oldCoast.substring(0, 7);\n          let newCoast = elem.getElementsByClassName('reg-form_checkbox__coast')[0].innerHTML;\n          newCoast = newCoast.substring(0, 7);\n          changeCoast(coastWrap, oldCoast, newCoast);\n          elem.classList.add(activeClass);\n          input.checked = true;\n          /*if( item.classList.contains('premium') ) {\r\n              addBlock( '.registration_info__promocode' );\r\n          }*/\n        }\n      });\n    });\n  });\n}\n\nfunction changeCoast(wrap, oldCoastValue, newCoastValue) {\n  if (!wrap) {\n    return;\n  }\n\n  wrap.children[0].innerHTML = newCoastValue;\n  wrap.children[1].innerHTML = oldCoastValue;\n}\n\nfunction addBlock(selector) {\n  const block = document.querySelector(selector);\n\n  if (!selector) {\n    return;\n  }\n\n  block.style.display = 'block';\n}\n\nfunction removeBlock(selector) {\n  const block = document.querySelector(selector);\n\n  if (!selector) {\n    return;\n  }\n\n  block.style.display = 'none';\n}\n\n\n\n//# sourceURL=webpack:///./app/js/form-page.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-page */ \"./app/js/form-page.js\");\n/* harmony import */ var _validationClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationClass */ \"./app/js/validationClass.js\");\n/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalWindow */ \"./app/js/modalWindow.js\");\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  Object(_form_page__WEBPACK_IMPORTED_MODULE_0__[\"checkboxes\"])('reg-form_checkbox', 'active');\n\n  function slider(sliderClass) {\n    if (!document.getElementsByClassName(sliderClass)[0]) {\n      return;\n    }\n\n    $(`.${sliderClass}`).owlCarousel({\n      loop: true,\n      items: 1,\n      dots: false,\n      navContainerClass: 'personal_slider__arrows',\n      navClass: ['personal_slider__arr personal_slider__arr-lt;', 'personal_slider__arr personal_slider__arr-rt;']\n    });\n  }\n\n  slider('personal_slider');\n\n  function showHideContent(arrayId) {\n    if (!document.getElementById(arrayId)) {\n      return;\n    }\n\n    let items = document.getElementById(arrayId).children;\n    items = Array.prototype.slice.call(items);\n    items.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        if (this.classList.contains('active')) {\n          this.classList.remove('active');\n        } else {\n          this.classList.add('active');\n        }\n      });\n    });\n  }\n\n  showHideContent('programs');\n  showHideContent('q-a-wrap');\n\n  function getCoords(elem) {\n    // кроме IE8-\n    const box = elem.getBoundingClientRect();\n    return {\n      top: box.top + pageYOffset,\n      left: box.left + pageXOffset\n    };\n  }\n\n  function fadeInAnimate(elems) {\n    if (!document.getElementsByClassName(elems)[0]) {\n      return;\n    }\n\n    let items = document.getElementsByClassName(elems);\n    items = Array.prototype.slice.call(items);\n    window.addEventListener('scroll', function () {\n      items.forEach(function (item, i) {\n        if (i === 0) {\n          return;\n        }\n\n        const scrolling = getCoords(item).top - window.innerHeight - item.offsetHeight / 2;\n\n        if (window.pageYOffset > scrolling) {\n          if (!item.classList.contains('animate__fadeInUp')) {\n            item.classList.add('animate__fadeInUp');\n          }\n        } else {\n          if (item.classList.contains('animate__fadeInUp')) {\n            item.classList.remove('animate__fadeInUp');\n          }\n        }\n      });\n    });\n  }\n\n  fadeInAnimate('how-we-preparing_item');\n  $('#to-subscription').click(function () {\n    $('html, body').animate({\n      scrollTop: $('#subscription').offset().top\n    }, 1000);\n  });\n  const registerForm = document.getElementById('registration_form');\n\n  if (registerForm) {\n    const validation = new _validationClass__WEBPACK_IMPORTED_MODULE_1__[\"Validation\"]({\n      submitBtn: 'sbmt-btn',\n      name: 'reg-name',\n      phone: 'reg-phone',\n      email: 'reg-email',\n      childName: 'reg-child-name',\n      childClass: 'reg-child-class'\n    });\n    validation.init();\n  }\n\n  function modalWindow() {\n    const modal = new _modalWindow__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"]();\n    const btn = document.getElementById('open-modal');\n\n    if (!btn) {\n      return;\n    }\n\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      modal.init();\n    });\n  }\n\n  modalWindow();\n\n  function childClass() {\n    const elem = document.getElementsByClassName('reg-form_formgroup__child-class')[0];\n\n    if (!elem) {\n      return;\n    }\n\n    const input = elem.querySelector('input');\n    elem.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (this.classList.contains('active')) {\n        this.classList.remove('active');\n      } else {\n        this.classList.add('active');\n        const itemsWrap = document.getElementsByClassName('reg-form_formgroup__child-class--classes')[0];\n        itemsWrap.addEventListener('click', function (e) {\n          e.preventDefault();\n          const target = e.target;\n          input.value = target.innerHTML;\n        });\n      }\n    });\n  }\n\n  childClass();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/modalWindow.js":
/*!*******************************!*\
  !*** ./app/js/modalWindow.js ***!
  \*******************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var _validationClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationClass */ \"./app/js/validationClass.js\");\n\n\n\n\nclass Modal {\n  constructor(options) {\n    this.modal = 0;\n    this.ANIMATION_SPEED = 350;\n    this.closing = false;\n    this.body = document.body;\n  }\n\n  createModal() {\n    this.modal = document.createElement('div');\n    this.modal.classList.add('modal');\n    this.modal.dataset.close = 'true';\n    this.modal.insertAdjacentHTML('afterBegin', `<div class=\"modal_window\">\n          <span class=\"modal_close\" id=\"modal-close\" data-close=\"true\">&times;</span>\n          <div class=\"modal_body\">\n            <p class=\"modal_caption\">Запись на онлайн занятия</p>\n            <form action=\"#\" class=\"modal_form\" id=\"modal-form\">\n              <div class=\"modal_form__formgroup\">\n                <label for=\"modal-name\" class=\"modal_form__label\"></label>\n                <input type=\"text\"\n                       name=\"modal-name\"\n                       id=\"modal-name\"\n                       required\n                       class=\"modal_form__input\"\n                       placeholder=\"Ваше имя\">\n              </div>\n              <div class=\"modal_form__formgroup\">\n                <label for=\"modal-phone\" class=\"modal_form__label\"></label>\n                <input type=\"text\"\n                       name=\"modal-phone\"\n                       id=\"modal-phone\"\n                       required\n                       class=\"modal_form__input\"\n                       placeholder=\"+7 (___)___-__-__\">\n              </div>\n              <div class=\"modal_form__formgroup\">\n                <label for=\"modal-email\" class=\"modal_form__label\"></label>\n                <input type=\"text\"\n                       name=\"modal-email\"\n                       id=\"modal-email\"\n                       required\n                       class=\"modal_form__input\"\n                       placeholder=\"Ваш e-mail\">\n              </div>\n              <button type=\"submit\" class=\"purple-btn\" id=\"modal-btn\">Оставить заявку</button>\n            </form>\n            <p class=\"modal_note\">Нажимая кнопку я соглашаюсь с</p>\n            <a class=\"modal_note__link\">Условиями соглашения</a>\n          </div>\n        </div>`);\n    document.body.appendChild(this.modal);\n    return this.modal;\n  }\n\n  sendFormData() {\n    const submitBtn = document.getElementById('modal-btn');\n    const self = this;\n    const validate = new _validationClass__WEBPACK_IMPORTED_MODULE_0__[\"Validation\"]({\n      submitBtn: 'modal-btn',\n      name: 'modal-name',\n      phone: 'modal-phone',\n      email: 'modal-email'\n    });\n    validate.init();\n    submitBtn.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (validate.success) {\n        self.close();\n      }\n    });\n  }\n\n  listeners() {\n    this.modal.addEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  open() {\n    this.createModal();\n    setTimeout(() => {\n      if (!this.closing) {\n        this.modal.classList.add('open');\n      }\n\n      this.body.classList.add('body-forbiddence-scroll');\n    }, 10);\n    this.listeners();\n  }\n\n  close() {\n    this.closing = true;\n    this.modal.classList.remove('open');\n    this.modal.classList.add('modal-hide');\n    setTimeout(() => {\n      this.modal.classList.remove('modal-hide');\n      this.destroy();\n      this.closing = false;\n    }, this.ANIMATION_SPEED);\n    this.body.classList.remove('body-forbiddence-scroll');\n  }\n\n  destroy() {\n    this.modal.parentNode.removeChild(this.modal);\n    this.modal.removeEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  init() {\n    this.open();\n    this.sendFormData();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/modalWindow.js?");

/***/ }),

/***/ "./app/js/validationClass.js":
/*!***********************************!*\
  !*** ./app/js/validationClass.js ***!
  \***********************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validation\", function() { return Validation; });\n\n\nclass CheckEmpty extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckEmpty';\n  }\n\n}\n\nclass NameValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'NameValidationError';\n  }\n\n}\n\nclass CheckLength extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckLength';\n  }\n\n}\n\nclass CheckEmail extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckEmail';\n  }\n\n}\n\nclass CheckPhone extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckPhone';\n  }\n\n}\n\nclass Validation {\n  constructor(options) {\n    this.submitBtn = document.getElementById(options.submitBtn);\n    this.inputs = {\n      name: document.getElementById(options.name),\n      phone: document.getElementById(options.phone),\n      email: document.getElementById(options.email),\n      childName: document.getElementById(options.childName),\n      childClass: document.getElementById(options.childClass)\n    };\n    this.promocode = false;\n    this.subscription = '';\n    this.success = false;\n  }\n\n  checkEmpty(inputValue) {\n    if (inputValue === '') {\n      throw new CheckEmpty('Это поле обязательно для заполнения');\n    }\n\n    return inputValue;\n  }\n\n  checkLength(inputValue, minLength, maxLength) {\n    const inputLength = inputValue.length;\n\n    if (inputLength < minLength) {\n      throw new CheckLength(`Поле должно содержать не менее ${minLength} символов`);\n    }\n\n    if (inputLength > maxLength) {\n      throw new CheckLength(`Количество символов превышает ${maxLength}. Введите корректные данные`);\n    }\n  }\n\n  checkName(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    this.checkLength(inputValue, 2, 50);\n    const regExp = /^[а-яА-ЯЁё]+$/;\n\n    if (!regExp.test(inputValue)) {\n      throw new NameValidationError('Допустимы только буквы русского алфавита');\n    }\n\n    return inputValue;\n  }\n\n  checkPhone(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    const numberLength = 16;\n    const regExp = /\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}/;\n\n    if (!regExp.test(inputValue) || inputValue.length !== numberLength) {\n      throw new CheckPhone('Некорректный номер телефона');\n    }\n\n    return inputValue;\n  }\n\n  maskPhone(input) {\n    new IMask(input, {\n      mask: '+{7}(000)000-00-00'\n    });\n  }\n\n  checkEmail(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    this.checkLength(inputValue, 3, 50);\n    const regExp = /^[\\w]{1}[\\w-\\.]*@[\\w-]+\\.[a-z]{2,4}$/i;\n\n    if (!regExp.test(inputValue)) {\n      throw new CheckEmail('Некорректный формат Email');\n    }\n\n    return inputValue;\n  }\n\n  checkClass(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    return inputValue;\n  }\n\n  createWarningMessage(message) {\n    const paragraph = document.createElement('p');\n    paragraph.className = 'warning';\n    paragraph.innerHTML = message;\n    return paragraph;\n  }\n\n  catchErrors(input, e, ...args) {\n    for (const argsItem of args) {\n      if (e instanceof argsItem) {\n        const messageElement = this.createWarningMessage(e.message);\n        input.parentElement.appendChild(messageElement);\n        input.classList.add('warn');\n      }\n    }\n  }\n\n  check() {\n    const errors = [];\n\n    for (const input in this.inputs) {\n      const elem = this.inputs[input];\n\n      if (!elem) {\n        continue;\n      }\n\n      switch (input) {\n        case 'name':\n          try {\n            this.checkName(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, NameValidationError);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'childName':\n          try {\n            this.checkName(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, NameValidationError);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'phone':\n          try {\n            this.checkPhone(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckPhone);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'email':\n          try {\n            this.checkEmail(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, CheckEmail);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'childClass':\n          try {\n            this.checkClass(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty);\n            errors.push(e);\n          }\n\n          break;\n      }\n    }\n\n    if (errors.length === 0) {\n      this.success = true;\n    }\n  }\n\n  init() {\n    this.maskPhone(this.inputs.phone);\n    this.submitBtn.addEventListener('click', e => {\n      e.preventDefault();\n      const warningMessages = document.getElementsByClassName('warning');\n      let invalidInputs = document.getElementsByClassName('warn');\n\n      if (warningMessages[0]) {\n        while (warningMessages.length) {\n          warningMessages[0].parentNode.removeChild(warningMessages[0]);\n        }\n      }\n\n      if (invalidInputs) {\n        invalidInputs = Array.prototype.slice.call(invalidInputs);\n\n        for (let i = 0, length = invalidInputs.length; i < length; i++) {\n          if (invalidInputs[i].classList.contains('warn')) {\n            invalidInputs[i].classList.remove('warn');\n          }\n        }\n      }\n\n      this.check();\n    });\n    return this.success;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/validationClass.js?");

/***/ })

/******/ });