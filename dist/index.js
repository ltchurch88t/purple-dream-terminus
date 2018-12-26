(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("terminus-core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "terminus-core"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("terminus-core")) : factory(root["@angular/core"], root["terminus-core"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./src/theme.scss ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../~/css-loader!../~/sass-loader/lib/loader.js!./theme.scss */ 4);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "terminus-core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = __webpack_require__(/*! @angular/core */ 1);
const terminus_core_1 = __webpack_require__(/*! terminus-core */ 2);
let PurpleDreamTheme = class PurpleDreamTheme extends terminus_core_1.Theme {
    constructor() {
        super(...arguments);
        this.name = 'Purple Dream';
        this.css = __webpack_require__(/*! ./theme.scss */ 0);
        this.terminalBackground = '#9370DB';
    }
};
PurpleDreamTheme = __decorate([
    core_1.Injectable()
], PurpleDreamTheme);
let PurpleDreamThemeModule = class PurpleDreamThemeModule {
};
PurpleDreamThemeModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: terminus_core_1.Theme, useClass: PurpleDreamTheme, multi: true },
        ],
    })
], PurpleDreamThemeModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurpleDreamThemeModule;


/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./src/theme.scss ***!
  \*********************************************************************/
/***/ (function(module, exports) {

throw new Error("Module build failed: \n$button-active-bg: ;\n                ^\n      Invalid CSS after \"$button-active-bg:\": expected expression (e.g. 1px, bold), was \";\"\n      in /Users/LC/terminus-themes/terminus-purple-dream-theme/src/theme.scss (line 9, column 18)");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map