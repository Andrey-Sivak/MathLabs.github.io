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

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  $('.personal_slider').owlCarousel({\n    loop: true,\n    items: 1,\n    dots: false,\n    navContainerClass: 'personal_slider__arrows',\n    navClass: ['personal_slider__arr personal_slider__arr-lt;', 'personal_slider__arr personal_slider__arr-rt;']\n  });\n\n  function showHideContent(arrayId) {\n    let items = document.getElementById(arrayId).children;\n    items = Array.prototype.slice.call(items);\n    items.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        if (this.classList.contains('active')) {\n          this.classList.remove('active');\n        } else {\n          this.classList.add('active');\n        }\n\n        const self = this;\n        items.forEach(function (elem) {\n          if (elem !== self) {\n            if (elem.classList.contains('active')) {\n              elem.classList.remove('active');\n            }\n          }\n        });\n      });\n    });\n  }\n\n  showHideContent('programs');\n  showHideContent('q-a-wrap');\n  const wow = new WOW();\n  wow.init();\n\n  function getCoords(elem) {\n    // кроме IE8-\n    const box = elem.getBoundingClientRect();\n    return {\n      top: box.top + pageYOffset,\n      left: box.left + pageXOffset\n    };\n  }\n\n  function fadeInAnimate(elems) {\n    let items = document.getElementsByClassName(elems);\n    items = Array.prototype.slice.call(items);\n    window.addEventListener('scroll', function (e) {\n      // 1696\n      items.forEach(function (item) {\n        const scrolling = getCoords(item).top - window.innerHeight;\n\n        if (window.pageYOffset > scrolling) {\n          if (!item.classList.contains('animate__fadeInUp')) {\n            item.classList.add('animate__fadeInUp');\n          }\n        } else {\n          if (item.classList.contains('animate__fadeInUp')) {\n            item.classList.remove('animate__fadeInUp');\n          }\n        }\n      });\n    });\n  }\n\n  fadeInAnimate('how-we-preparing_item');\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });