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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/blocks/blocks.css":
/*!*************************************!*\
  !*** ./resources/blocks/blocks.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5jc3M/MTM1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.css\n");

/***/ }),

/***/ "./resources/blocks/blocks.editor.css":
/*!********************************************!*\
  !*** ./resources/blocks/blocks.editor.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5lZGl0b3IuY3NzPzQxNDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5lZGl0b3IuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.editor.css\n");

/***/ }),

/***/ "./resources/blocks/blocks.js":
/*!************************************!*\
  !*** ./resources/blocks/blocks.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _segment_content_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-content/index */ \"./resources/blocks/segment-content/index.js\");\n/* harmony import */ var _segment_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment/index */ \"./resources/blocks/segment/index.js\");\n/* harmony import */ var _container_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/index */ \"./resources/blocks/container/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n/**\n * WordPress dependencies\n */\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\n * Import blocks\n */\n// import * as postsBlock from './posts/index';\n// import * as testBlock from './test/index';\n\n\n\n\n/**\n * Register Blocks\n */\n// registerBlockType( postsBlock.name, postsBlock.settings );\n// registerBlockType( testBlock.name, testBlock.settings );\n\nregisterBlockType(_segment_content_index__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _segment_content_index__WEBPACK_IMPORTED_MODULE_0__[\"settings\"]);\nregisterBlockType(_segment_index__WEBPACK_IMPORTED_MODULE_1__[\"name\"], _segment_index__WEBPACK_IMPORTED_MODULE_1__[\"settings\"]);\nregisterBlockType(_container_index__WEBPACK_IMPORTED_MODULE_2__[\"name\"], _container_index__WEBPACK_IMPORTED_MODULE_2__[\"settings\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2Jsb2Nrcy5qcz8yZTFhIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJzZWdtZW50Q29udGVudEJsb2NrIiwic2VnbWVudEJsb2NrIiwiY29udGFpbmVyQmxvY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0lBQ1FBLGlCLEdBQXNCQyxFQUFFLENBQUNDLE0sQ0FBekJGLGlCO0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxpQkFBaUIsQ0FBRUcsMkRBQUYsRUFBNEJBLCtEQUE1QixDQUFqQjtBQUNBSCxpQkFBaUIsQ0FBRUksbURBQUYsRUFBcUJBLHVEQUFyQixDQUFqQjtBQUNBSixpQkFBaUIsQ0FBRUsscURBQUYsRUFBdUJBLHlEQUF2QixDQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvYmxvY2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzXG4gKlxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuXG4vKipcbiAqIEltcG9ydCBibG9ja3NcbiAqL1xuLy8gaW1wb3J0ICogYXMgcG9zdHNCbG9jayBmcm9tICcuL3Bvc3RzL2luZGV4Jztcbi8vIGltcG9ydCAqIGFzIHRlc3RCbG9jayBmcm9tICcuL3Rlc3QvaW5kZXgnO1xuaW1wb3J0ICogYXMgc2VnbWVudENvbnRlbnRCbG9jayBmcm9tICcuL3NlZ21lbnQtY29udGVudC9pbmRleCc7XG5pbXBvcnQgKiBhcyBzZWdtZW50QmxvY2sgZnJvbSAnLi9zZWdtZW50L2luZGV4JztcbmltcG9ydCAqIGFzIGNvbnRhaW5lckJsb2NrIGZyb20gJy4vY29udGFpbmVyL2luZGV4JztcblxuLyoqXG4gKiBSZWdpc3RlciBCbG9ja3NcbiAqL1xuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoIHBvc3RzQmxvY2submFtZSwgcG9zdHNCbG9jay5zZXR0aW5ncyApO1xuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoIHRlc3RCbG9jay5uYW1lLCB0ZXN0QmxvY2suc2V0dGluZ3MgKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKCBzZWdtZW50Q29udGVudEJsb2NrLm5hbWUsIHNlZ21lbnRDb250ZW50QmxvY2suc2V0dGluZ3MgKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKCBzZWdtZW50QmxvY2submFtZSwgc2VnbWVudEJsb2NrLnNldHRpbmdzICk7XG5yZWdpc3RlckJsb2NrVHlwZSggY29udGFpbmVyQmxvY2submFtZSwgY29udGFpbmVyQmxvY2suc2V0dGluZ3MgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/blocks.js\n");

/***/ }),

/***/ "./resources/blocks/container/block.json":
/*!***********************************************!*\
  !*** ./resources/blocks/container/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, title, category, icon, description, keywords, textdomain, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiVersion\\\":2,\\\"name\\\":\\\"wbl/container\\\",\\\"title\\\":\\\"Container\\\",\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"layout\\\",\\\"description\\\":\\\"A simple container block for allowing hooks\\\",\\\"keywords\\\":[\\\"column\\\",\\\"Kolom\\\",\\\"Group\\\"],\\\"textdomain\\\":\\\"wbl\\\",\\\"attributes\\\":{\\\"templateLock\\\":{\\\"type\\\":\\\"boolean\\\",\\\"default\\\":false},\\\"orientation\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"vertical\\\"}},\\\"supports\\\":{\\\"align\\\":false,\\\"alignWide\\\":false,\\\"anchor\\\":true,\\\"className\\\":false,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3MvY29udGFpbmVyL2Jsb2NrLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/container/block.json\n");

/***/ }),

/***/ "./resources/blocks/container/edit.js":
/*!********************************************!*\
  !*** ./resources/blocks/container/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar __ = wp.i18n.__;\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      isSelected = _ref.isSelected;\n  // Get and setup attributes\n  var orientation = attributes.orientation;\n  var templateLock = attributes.templateLock ? 'insert' : false; // Setup new variables\n\n  var baseClassName = \"wbl-container\"; // Innerblocks\n\n  var renderAppender = isSelected ? InnerBlocks.ButtonBlockAppender : false; // Setup blockProps\n\n  var blockProps = useBlockProps({\n    className: baseClassName\n  });\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(InnerBlocks, {\n    templateLock: templateLock,\n    orientation: orientation,\n    renderAppender: renderAppender\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2NvbnRhaW5lci9lZGl0LmpzPzRlNzgiXSwibmFtZXMiOlsid3AiLCJibG9ja0VkaXRvciIsIklubmVyQmxvY2tzIiwidXNlQmxvY2tQcm9wcyIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwiaXNTZWxlY3RlZCIsIm9yaWVudGF0aW9uIiwidGVtcGxhdGVMb2NrIiwiYmFzZUNsYXNzTmFtZSIsInJlbmRlckFwcGVuZGVyIiwiQnV0dG9uQmxvY2tBcHBlbmRlciIsImJsb2NrUHJvcHMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO3NCQUN1Q0EsRUFBRSxDQUFDQyxXO0lBQWxDQyxXLG1CQUFBQSxXO0lBQWFDLGEsbUJBQUFBLGE7SUFDYkMsRSxHQUFPSixFQUFFLENBQUNLLEksQ0FBVkQsRTtBQUVSO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRSxJQUFULE9BQTRDO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUUzQztBQUNBLE1BQU1DLFdBQVcsR0FBTUYsVUFBVSxDQUFDRSxXQUFsQztBQUNBLE1BQU1DLFlBQVksR0FBS0gsVUFBVSxDQUFDRyxZQUFYLEdBQTBCLFFBQTFCLEdBQXFDLEtBQTVELENBSjJDLENBTTNDOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QixDQVAyQyxDQVMzQzs7QUFDQSxNQUFNQyxjQUFjLEdBQUlKLFVBQUQsR0FBZU4sV0FBVyxDQUFDVyxtQkFBM0IsR0FBaUQsS0FBeEUsQ0FWMkMsQ0FZM0M7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHWCxhQUFhLENBQUU7QUFDakNZLGFBQVMsRUFBRUo7QUFEc0IsR0FBRixDQUFoQztBQUlBLHNCQUNDLDJCQUFTRyxVQUFULGVBQ0Msb0JBQUMsV0FBRDtBQUNDLGdCQUFZLEVBQUdKLFlBRGhCO0FBRUMsZUFBVyxFQUFHRCxXQUZmO0FBR0Msa0JBQWMsRUFBR0c7QUFIbEIsSUFERCxDQUREO0FBU0E7O0FBRWNOLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9jb250YWluZXIvZWRpdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XHRJbm5lckJsb2NrcywgdXNlQmxvY2tQcm9wcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEVkaXQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZWRpdCggeyBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cblx0Ly8gR2V0IGFuZCBzZXR1cCBhdHRyaWJ1dGVzXG5cdGNvbnN0IG9yaWVudGF0aW9uICAgID0gYXR0cmlidXRlcy5vcmllbnRhdGlvbjtcblx0Y29uc3QgdGVtcGxhdGVMb2NrICAgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlTG9jayA/ICdpbnNlcnQnIDogZmFsc2U7XG5cblx0Ly8gU2V0dXAgbmV3IHZhcmlhYmxlc1xuXHRjb25zdCBiYXNlQ2xhc3NOYW1lID0gXCJ3YmwtY29udGFpbmVyXCI7XG5cblx0Ly8gSW5uZXJibG9ja3Ncblx0Y29uc3QgcmVuZGVyQXBwZW5kZXIgPSAoaXNTZWxlY3RlZCkgPyBJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIDogZmFsc2U7XG5cblx0Ly8gU2V0dXAgYmxvY2tQcm9wc1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygge1xuXHRcdGNsYXNzTmFtZTogYmFzZUNsYXNzTmFtZVxuXHR9ICk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0dGVtcGxhdGVMb2NrPXsgdGVtcGxhdGVMb2NrIH1cblx0XHRcdFx0b3JpZW50YXRpb249eyBvcmllbnRhdGlvbiB9XG5cdFx0XHRcdHJlbmRlckFwcGVuZGVyPXsgcmVuZGVyQXBwZW5kZXIgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/container/edit.js\n");

/***/ }),

/***/ "./resources/blocks/container/index.js":
/*!*********************************************!*\
  !*** ./resources/blocks/container/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/container/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/container/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/container/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/container/save.js\");\n/**\n * README\n *\n * Developer note: see https://material.io/components/cards for card content and restraints\n */\n\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2NvbnRhaW5lci9pbmRleC5qcz8wYjdkIl0sIm5hbWVzIjpbImxvZGFzaCIsIm1lcmdlIiwibmFtZSIsIm1ldGFkYXRhIiwic2V0dGluZ3MiLCJlZGl0Iiwic2F2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtjQUNrQkEsTTtJQUFWQyxLLFdBQUFBLEssRUFFUjs7QUFDQTtBQUNBO0NBR0E7O0lBQ1FDLEksR0FBU0Msd0MsQ0FBVEQsSSxFQUVSOztBQUNBLElBQU1FLFFBQVEsR0FBR0gsS0FBSyxDQUFDRSx3Q0FBRCxFQUFXO0FBQ2hDRSxNQUFJLEVBQUVBLDZDQUQwQjtBQUVoQ0MsTUFBSSxFQUFFQSw2Q0FBSUE7QUFGc0IsQ0FBWCxDQUF0QixDLENBS0EiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL2NvbnRhaW5lci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUkVBRE1FXG4gKlxuICogRGV2ZWxvcGVyIG5vdGU6IHNlZSBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvY2FyZHMgZm9yIGNhcmQgY29udGVudCBhbmQgcmVzdHJhaW50c1xuICovXG5cbi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kYW5jaWVzXG4gKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IGxvZGFzaDtcblxuLy8gSW1wb3J0c1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLy8gR2V0IG5hbWUgZnJvbSBtZXRhZGF0YVxuY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YTtcblxuLy8gTWVyZ2UgdGhlIG1ldGFkYXRhIHdpdGggdGhlIGVkaXQgYW5kIHNhdmUgZnVuY3Rpb25zXG5jb25zdCBzZXR0aW5ncyA9IG1lcmdlKG1ldGFkYXRhLCB7XG5cdGVkaXQ6IGVkaXQsXG5cdHNhdmU6IHNhdmVcbn0pO1xuXG4vLyBFeHBvcnRcbmV4cG9ydCB7IG5hbWUsIHNldHRpbmdzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/container/index.js\n");

/***/ }),

/***/ "./resources/blocks/container/save.js":
/*!********************************************!*\
  !*** ./resources/blocks/container/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  // Get and setup attributes\n  var orientation = attributes.orientation;\n  var templateLock = attributes.templateLock ? 'insert' : false; // Setup new variables\n\n  var baseClassName = \"wbl-container\"; // Setup blockProps\n\n  var blockProps = useBlockProps.save({\n    className: baseClassName\n  });\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(InnerBlocks.Content, null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2NvbnRhaW5lci9zYXZlLmpzPzVlNzgiXSwibmFtZXMiOlsid3AiLCJibG9ja0VkaXRvciIsIklubmVyQmxvY2tzIiwidXNlQmxvY2tQcm9wcyIsInNhdmUiLCJhdHRyaWJ1dGVzIiwib3JpZW50YXRpb24iLCJ0ZW1wbGF0ZUxvY2siLCJiYXNlQ2xhc3NOYW1lIiwiYmxvY2tQcm9wcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7c0JBQ3VDQSxFQUFFLENBQUNDLFc7SUFBbENDLFcsbUJBQUFBLFc7SUFBYUMsYSxtQkFBQUEsYTtBQUVyQjtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsSUFBVCxPQUFnQztBQUFBLE1BQWZDLFVBQWUsUUFBZkEsVUFBZTtBQUUvQjtBQUNBLE1BQU1DLFdBQVcsR0FBTUQsVUFBVSxDQUFDQyxXQUFsQztBQUNBLE1BQU1DLFlBQVksR0FBS0YsVUFBVSxDQUFDRSxZQUFYLEdBQTBCLFFBQTFCLEdBQXFDLEtBQTVELENBSitCLENBTS9COztBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QixDQVArQixDQVMvQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLGFBQWEsQ0FBQ0MsSUFBZCxDQUFvQjtBQUNoQ00sYUFBUyxFQUFFRjtBQURxQixHQUFwQixDQUFuQjtBQUlBLHNCQUNDLDJCQUFTQyxVQUFULGVBQ0Msb0JBQUMsV0FBRCxDQUFhLE9BQWIsT0FERCxDQUREO0FBS0E7O0FBRWNMLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9jb250YWluZXIvc2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IElubmVyQmxvY2tzLCB1c2VCbG9ja1Byb3BzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLyoqXG4gKiBTYXZlIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXG5cdC8vIEdldCBhbmQgc2V0dXAgYXR0cmlidXRlc1xuXHRjb25zdCBvcmllbnRhdGlvbiAgICA9IGF0dHJpYnV0ZXMub3JpZW50YXRpb247XG5cdGNvbnN0IHRlbXBsYXRlTG9jayAgID0gYXR0cmlidXRlcy50ZW1wbGF0ZUxvY2sgPyAnaW5zZXJ0JyA6IGZhbHNlO1xuXG5cdC8vIFNldHVwIG5ldyB2YXJpYWJsZXNcblx0Y29uc3QgYmFzZUNsYXNzTmFtZSA9IFwid2JsLWNvbnRhaW5lclwiO1xuXG5cdC8vIFNldHVwIGJsb2NrUHJvcHNcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMuc2F2ZSgge1xuICAgICAgICBjbGFzc05hbWU6IGJhc2VDbGFzc05hbWVcbiAgICB9ICk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/container/save.js\n");

/***/ }),

/***/ "./resources/blocks/segment-content/block.json":
/*!*****************************************************!*\
  !*** ./resources/blocks/segment-content/block.json ***!
  \*****************************************************/
/*! exports provided: apiVersion, name, title, parent, category, icon, description, textdomain, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiVersion\\\":2,\\\"name\\\":\\\"wbl/segment-content\\\",\\\"title\\\":\\\"Segment: Content\\\",\\\"parent\\\":[\\\"wbl/segment\\\"],\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"editor-table\\\",\\\"description\\\":\\\"Layoutstructure\\\",\\\"textdomain\\\":\\\"wbl\\\",\\\"attributes\\\":{},\\\"supports\\\":{\\\"alignWide\\\":true,\\\"align\\\":[\\\"full\\\",\\\"wide\\\"],\\\"anchor\\\":true,\\\"className\\\":false,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VnbWVudC1jb250ZW50L2Jsb2NrLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/segment-content/block.json\n");

/***/ }),

/***/ "./resources/blocks/segment-content/edit.js":
/*!**************************************************!*\
  !*** ./resources/blocks/segment-content/edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar __ = wp.i18n.__;\n/**\n * Internal dependencies\n */\n\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      isSelected = _ref.isSelected;\n  // Setup new variables\n  var baseClassName = \"wbl-segment__content\";\n  var blockClassName = baseClassName; // Innerblocks\n\n  var innerBlocksTemplate = [['core/paragraph', {\n    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'\n  }]]; // Setup blockProps\n\n  var blockProps = useBlockProps({\n    className: blockClassName\n  });\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(InnerBlocks, {\n    template: innerBlocksTemplate\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQtY29udGVudC9lZGl0LmpzP2NiMGQiXSwibmFtZXMiOlsid3AiLCJibG9ja0VkaXRvciIsIklubmVyQmxvY2tzIiwidXNlQmxvY2tQcm9wcyIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJiYXNlQ2xhc3NOYW1lIiwiYmxvY2tDbGFzc05hbWUiLCJpbm5lckJsb2Nrc1RlbXBsYXRlIiwiY29udGVudCIsImJsb2NrUHJvcHMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO3NCQUN1Q0EsRUFBRSxDQUFDQyxXO0lBQWxDQyxXLG1CQUFBQSxXO0lBQWFDLGEsbUJBQUFBLGE7SUFDYkMsRSxHQUFPSixFQUFFLENBQUNLLEksQ0FBVkQsRTtBQUVSO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0UsSUFBVCxPQUEyRDtBQUFBLE1BQTFDQyxVQUEwQyxRQUExQ0EsVUFBMEM7QUFBQSxNQUE5QkMsYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsTUFBZkMsVUFBZSxRQUFmQSxVQUFlO0FBRTFEO0FBQ0EsTUFBTUMsYUFBYSxHQUFRLHNCQUEzQjtBQUNBLE1BQU1DLGNBQWMsR0FBT0QsYUFBM0IsQ0FKMEQsQ0FNMUQ7O0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcsQ0FDM0IsQ0FDQyxnQkFERCxFQUVDO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRkQsQ0FEMkIsQ0FBNUIsQ0FQMEQsQ0FjMUQ7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHWCxhQUFhLENBQUU7QUFDakNZLGFBQVMsRUFBRUo7QUFEc0IsR0FBRixDQUFoQztBQUtBLHNCQUNDLHVEQUNDLDJCQUFTRyxVQUFULGVBQ0Msb0JBQUMsV0FBRDtBQUNDLFlBQVEsRUFBR0Y7QUFEWixJQURELENBREQsQ0FERDtBQVNBOztBQUVjTixtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VnbWVudC1jb250ZW50L2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1x0SW5uZXJCbG9ja3MsIHVzZUJsb2NrUHJvcHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5cbi8qKlxuICogRWRpdCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblxuXHQvLyBTZXR1cCBuZXcgdmFyaWFibGVzXG5cdGNvbnN0IGJhc2VDbGFzc05hbWUgICAgICA9IFwid2JsLXNlZ21lbnRfX2NvbnRlbnRcIjtcblx0Y29uc3QgYmxvY2tDbGFzc05hbWUgICAgID0gYmFzZUNsYXNzTmFtZTtcblxuXHQvLyBJbm5lcmJsb2Nrc1xuXHRjb25zdCBpbm5lckJsb2Nrc1RlbXBsYXRlID0gW1xuXHRcdFtcblx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHR7IGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG8gbGlndWxhIGVnZXQgZG9sb3IuIEFlbmVhbiBtYXNzYS4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfVxuXHRcdF1cblx0XTtcblxuXHQvLyBTZXR1cCBibG9ja1Byb3BzXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7XG5cdFx0Y2xhc3NOYW1lOiBibG9ja0NsYXNzTmFtZVxuXHR9ICk7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdHRlbXBsYXRlPXsgaW5uZXJCbG9ja3NUZW1wbGF0ZSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/blocks/segment-content/edit.js\n");

/***/ }),

/***/ "./resources/blocks/segment-content/index.js":
/*!***************************************************!*\
  !*** ./resources/blocks/segment-content/index.js ***!
  \***************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/segment-content/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/segment-content/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/segment-content/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/segment-content/save.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQtY29udGVudC9pbmRleC5qcz9jNDA0Il0sIm5hbWVzIjpbImxvZGFzaCIsIm1lcmdlIiwibmFtZSIsIm1ldGFkYXRhIiwic2V0dGluZ3MiLCJlZGl0Iiwic2F2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Y0FDa0JBLE07SUFBVkMsSyxXQUFBQSxLLEVBRVI7O0FBQ0E7QUFDQTtDQUdBOztJQUNRQyxJLEdBQVNDLHdDLENBQVRELEksRUFFUjs7QUFDQSxJQUFNRSxRQUFRLEdBQUdILEtBQUssQ0FBQ0Usd0NBQUQsRUFBVztBQUNoQ0UsTUFBSSxFQUFFQSw2Q0FEMEI7QUFFaENDLE1BQUksRUFBRUEsNkNBQUlBO0FBRnNCLENBQVgsQ0FBdEIsQyxDQUtBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9zZWdtZW50LWNvbnRlbnQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGFuY2llc1xuICovXG5jb25zdCB7IG1lcmdlIH0gPSBsb2Rhc2g7XG5cbi8vIEltcG9ydHNcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8vIEdldCBuYW1lIGZyb20gbWV0YWRhdGFcbmNvbnN0IHsgbmFtZSB9ID0gbWV0YWRhdGE7XG5cbi8vIE1lcmdlIHRoZSBtZXRhZGF0YSB3aXRoIHRoZSBlZGl0IGFuZCBzYXZlIGZ1bmN0aW9uc1xuY29uc3Qgc2V0dGluZ3MgPSBtZXJnZShtZXRhZGF0YSwge1xuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59KTtcblxuLy8gRXhwb3J0XG5leHBvcnQgeyBuYW1lLCBzZXR0aW5ncyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/segment-content/index.js\n");

/***/ }),

/***/ "./resources/blocks/segment-content/save.js":
/*!**************************************************!*\
  !*** ./resources/blocks/segment-content/save.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  // Setup new variables\n  var baseClassName = \"wbl-segment__content\";\n  var blockClassName = baseClassName; // Setup blockProps\n\n  var blockProps = useBlockProps.save({\n    className: blockClassName\n  });\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(InnerBlocks.Content, null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQtY29udGVudC9zYXZlLmpzPzI3NmEiXSwibmFtZXMiOlsid3AiLCJibG9ja0VkaXRvciIsIlJpY2hUZXh0IiwiSW5uZXJCbG9ja3MiLCJ1c2VCbG9ja1Byb3BzIiwic2F2ZSIsImF0dHJpYnV0ZXMiLCJiYXNlQ2xhc3NOYW1lIiwiYmxvY2tDbGFzc05hbWUiLCJibG9ja1Byb3BzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7c0JBQ2lEQSxFQUFFLENBQUNDLFc7SUFBNUNDLFEsbUJBQUFBLFE7SUFBVUMsVyxtQkFBQUEsVztJQUFhQyxhLG1CQUFBQSxhO0FBRS9CO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxJQUFULE9BQWdDO0FBQUEsTUFBZkMsVUFBZSxRQUFmQSxVQUFlO0FBRS9CO0FBQ0EsTUFBTUMsYUFBYSxHQUFRLHNCQUEzQjtBQUNBLE1BQU1DLGNBQWMsR0FBT0QsYUFBM0IsQ0FKK0IsQ0FNL0I7O0FBQ0EsTUFBTUUsVUFBVSxHQUFHTCxhQUFhLENBQUNDLElBQWQsQ0FBb0I7QUFDaENLLGFBQVMsRUFBRUY7QUFEcUIsR0FBcEIsQ0FBbkI7QUFJQSxzQkFDQywyQkFBU0MsVUFBVCxlQUNDLG9CQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQsQ0FERDtBQUtBOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VnbWVudC1jb250ZW50L3NhdmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IFJpY2hUZXh0LCBJbm5lckJsb2NrcywgdXNlQmxvY2tQcm9wcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8qKlxuICogU2F2ZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblxuXHQvLyBTZXR1cCBuZXcgdmFyaWFibGVzXG5cdGNvbnN0IGJhc2VDbGFzc05hbWUgICAgICA9IFwid2JsLXNlZ21lbnRfX2NvbnRlbnRcIjtcblx0Y29uc3QgYmxvY2tDbGFzc05hbWUgICAgID0gYmFzZUNsYXNzTmFtZTtcblxuXHQvLyBTZXR1cCBibG9ja1Byb3BzXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoIHtcbiAgICAgICAgY2xhc3NOYW1lOiBibG9ja0NsYXNzTmFtZVxuICAgIH0gKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgey4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/segment-content/save.js\n");

/***/ }),

/***/ "./resources/blocks/segment/block.json":
/*!*********************************************!*\
  !*** ./resources/blocks/segment/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, title, category, icon, description, keywords, textdomain, attributes, supports, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiVersion\\\":2,\\\"name\\\":\\\"wbl/segment\\\",\\\"title\\\":\\\"Segment\\\",\\\"category\\\":\\\"layout\\\",\\\"icon\\\":\\\"editor-table\\\",\\\"description\\\":\\\"Layoutstructure\\\",\\\"keywords\\\":[\\\"Segment\\\",\\\"Container\\\",\\\"Section\\\"],\\\"textdomain\\\":\\\"wbl\\\",\\\"attributes\\\":{\\\"tagName\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"div\\\"},\\\"variation\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"\\\"},\\\"allowedBlocks\\\":{\\\"type\\\":\\\"array\\\"},\\\"templateLock\\\":{\\\"type\\\":\\\"boolean\\\",\\\"default\\\":false},\\\"orientation\\\":{\\\"type\\\":\\\"string\\\",\\\"default\\\":\\\"vertical\\\"}},\\\"supports\\\":{\\\"alignWide\\\":true,\\\"align\\\":[\\\"full\\\",\\\"wide\\\"],\\\"anchor\\\":true,\\\"className\\\":false,\\\"customClassName\\\":true,\\\"defaultStylePicker\\\":false,\\\"html\\\":false}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VnbWVudC9ibG9jay5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/segment/block.json\n");

/***/ }),

/***/ "./resources/blocks/segment/edit-settings.js":
/*!***************************************************!*\
  !*** ./resources/blocks/segment/edit-settings.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    ExternalLink = _wp$components.ExternalLink,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    SelectControl = _wp$components.SelectControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar __ = wp.i18n.__;\n/**\n * Internal dependencies\n */\n\n/**\n * Edit Settings function\n */\n\nvar EditSettings = function EditSettings(_ref) {\n  var setAttributes = _ref.setAttributes,\n      tagName = _ref.tagName;\n  return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(SelectControl, {\n    label: __('Tag name', 'wbl-blocks'),\n    help: /*#__PURE__*/React.createElement(React.Fragment, null, __('Choosing the right semantic tag improves SEO and Accessibilty.', 'wbl-blocks'), /*#__PURE__*/React.createElement(ExternalLink, {\n      href: 'http://html5doctor.com/you-can-still-use-div/'\n    }, __('Learn more about semantic HTML5', 'wbl-blocks'))),\n    value: tagName,\n    onChange: function onChange(newValue) {\n      setAttributes({\n        tagName: newValue\n      });\n    },\n    options: [{\n      label: 'div',\n      value: 'div'\n    }, {\n      label: 'section',\n      value: 'section'\n    }, {\n      label: 'aside',\n      value: 'aside'\n    }, {\n      label: 'article',\n      value: 'article'\n    }]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvZWRpdC1zZXR0aW5ncy5qcz9hMTM4Il0sIm5hbWVzIjpbIndwIiwiYmxvY2tFZGl0b3IiLCJJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJjb21wb25lbnRzIiwiRXh0ZXJuYWxMaW5rIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJTZWxlY3RDb250cm9sIiwiVG9nZ2xlQ29udHJvbCIsIl9fIiwiaTE4biIsIkVkaXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZXMiLCJ0YWdOYW1lIiwibmV3VmFsdWUiLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQ0E7QUFDQTtzQkFDeURBLEVBQUUsQ0FBQ0MsVztJQUFwREMseUIsbUJBQUFBLHlCO0lBQTJCQyxpQixtQkFBQUEsaUI7cUJBQ3lDSCxFQUFFLENBQUNJLFU7SUFBdkVDLFksa0JBQUFBLFk7SUFBY0MsUyxrQkFBQUEsUztJQUFXQyxRLGtCQUFBQSxRO0lBQVVDLGEsa0JBQUFBLGE7SUFBZUMsYSxrQkFBQUEsYTtJQUNsREMsRSxHQUFPVixFQUFFLENBQUNXLEksQ0FBVkQsRTtBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFJQyxhQUFKLFFBQUlBLGFBQUo7QUFBQSxNQUFtQkMsT0FBbkIsUUFBbUJBLE9BQW5CO0FBQUEsc0JBQ3BCLG9CQUFDLGlCQUFELHFCQUNDLG9CQUFDLFNBQUQscUJBQ0Msb0JBQUMsYUFBRDtBQUNDLFNBQUssRUFBR0osRUFBRSxDQUFFLFVBQUYsRUFBYyxZQUFkLENBRFg7QUFFQyxRQUFJLGVBQ0gsMENBQ0dBLEVBQUUsQ0FBRSxnRUFBRixFQUFvRSxZQUFwRSxDQURMLGVBR0Msb0JBQUMsWUFBRDtBQUFjLFVBQUksRUFBRztBQUFyQixPQUNHQSxFQUFFLENBQUUsaUNBQUYsRUFBcUMsWUFBckMsQ0FETCxDQUhELENBSEY7QUFXQyxTQUFLLEVBQUdJLE9BWFQ7QUFZQyxZQUFRLEVBQUcsa0JBQUVDLFFBQUYsRUFBZ0I7QUFDMUJGLG1CQUFhLENBQUU7QUFBRUMsZUFBTyxFQUFFQztBQUFYLE9BQUYsQ0FBYjtBQUNBLEtBZEY7QUFlQyxXQUFPLEVBQUcsQ0FDVDtBQUFFQyxXQUFLLEVBQUUsS0FBVDtBQUFpQkMsV0FBSyxFQUFFO0FBQXhCLEtBRFMsRUFFVDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsV0FBSyxFQUFFO0FBQTNCLEtBRlMsRUFHVDtBQUFFRCxXQUFLLEVBQUUsT0FBVDtBQUFtQkMsV0FBSyxFQUFFO0FBQTFCLEtBSFMsRUFJVDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsV0FBSyxFQUFFO0FBQTNCLEtBSlM7QUFmWCxJQURELENBREQsQ0FEb0I7QUFBQSxDQUFyQjs7QUE2QmVMLDJFQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9zZWdtZW50L2VkaXQtc2V0dGluZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XHRJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XHRFeHRlcm5hbExpbmssIFBhbmVsQm9keSwgUGFuZWxSb3csIFNlbGVjdENvbnRyb2wsIFRvZ2dsZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogRWRpdCBTZXR0aW5ncyBmdW5jdGlvblxuICovXG5jb25zdCBFZGl0U2V0dGluZ3MgPSAoIHsgc2V0QXR0cmlidXRlcywgdGFnTmFtZSB9ICkgPT4gKFxuXHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PFBhbmVsQm9keT5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdUYWcgbmFtZScsICd3YmwtYmxvY2tzJyApIH1cblx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHsgX18oICdDaG9vc2luZyB0aGUgcmlnaHQgc2VtYW50aWMgdGFnIGltcHJvdmVzIFNFTyBhbmQgQWNjZXNzaWJpbHR5LicsICd3YmwtYmxvY2tzJyApIH1cblxuXHRcdFx0XHRcdFx0PEV4dGVybmFsTGluayBocmVmPXsgJ2h0dHA6Ly9odG1sNWRvY3Rvci5jb20veW91LWNhbi1zdGlsbC11c2UtZGl2LycgfT5cblx0XHRcdFx0XHRcdFx0eyBfXyggJ0xlYXJuIG1vcmUgYWJvdXQgc2VtYW50aWMgSFRNTDUnLCAnd2JsLWJsb2NrcycgKSB9XG5cdFx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZT17IHRhZ05hbWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyB0YWdOYW1lOiBuZXdWYWx1ZSB9IClcblx0XHRcdFx0fSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0eyBsYWJlbDogJ2RpdicsIFx0dmFsdWU6ICdkaXYnIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogJ3NlY3Rpb24nLCB2YWx1ZTogJ3NlY3Rpb24nIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogJ2FzaWRlJywgXHR2YWx1ZTogJ2FzaWRlJyB9LFxuXHRcdFx0XHRcdHsgbGFiZWw6ICdhcnRpY2xlJywgdmFsdWU6ICdhcnRpY2xlJyB9XG5cdFx0XHRcdF0gfVxuXHRcdFx0Lz5cblx0XHQ8L1BhbmVsQm9keT5cblx0PC9JbnNwZWN0b3JDb250cm9scz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZXR0aW5ncztcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/segment/edit-settings.js\n");

/***/ }),

/***/ "./resources/blocks/segment/edit.js":
/*!******************************************!*\
  !*** ./resources/blocks/segment/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _edit_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-settings */ \"./resources/blocks/segment/edit-settings.js\");\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    RichText = _wp$blockEditor.RichText,\n    useBlockProps = _wp$blockEditor.useBlockProps;\nvar __ = wp.i18n.__; // const { withSelect } = wp.data;\n\n/**\n * Internal dependencies\n */\n// import { name } from './';\n\n\n/**\n * Edit function\n */\n\nfunction edit(_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes,\n      isSelected = _ref.isSelected;\n  // Get and setup attributes\n  var tagName = attributes.tagName;\n  var variation = attributes.variation;\n  var allowedBlocks = attributes.allowedBlocks;\n  var orientation = attributes.orientation;\n  var templateLock = attributes.templateLock ? 'insert' : false; // Setup new variables\n\n  var baseClassName = \"wbl-segment\";\n  var variationClassName = variation ? baseClassName + '--' + variation : '';\n  var blockClassName = variationClassName ? baseClassName + ' ' + variationClassName : baseClassName;\n  var TagName = tagName; // Innerblocks\n  // const renderAppender = InnerBlocks.ButtonBlockAppender;\n\n  var renderAppender = isSelected ? InnerBlocks.ButtonBlockAppender : false; // Setup blockProps\n\n  var blockProps = useBlockProps({\n    className: blockClassName\n  });\n  var blocksTemplate = [['core/heading', {\n    level: 2,\n    content: __('Segment Title', 'wbl')\n  }], ['wbl/segment-content', {}, [['core/paragraph', {\n    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'\n  }]]], ['core/paragraph', {\n    content: '<i>Segment Footer</i>'\n  }]];\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(baseClassName, \"__inner\")\n  }, /*#__PURE__*/React.createElement(InnerBlocks, {\n    template: blocksTemplate,\n    allowedBlocks: allowedBlocks,\n    templateLock: templateLock,\n    orientation: orientation,\n    renderAppender: renderAppender\n  }))), /*#__PURE__*/React.createElement(_edit_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    setAttributes: setAttributes,\n    tagName: TagName\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvZWRpdC5qcz8yZDkzIl0sIm5hbWVzIjpbIndwIiwiYmxvY2tFZGl0b3IiLCJJbm5lckJsb2NrcyIsIlJpY2hUZXh0IiwidXNlQmxvY2tQcm9wcyIsIl9fIiwiaTE4biIsImVkaXQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJ0YWdOYW1lIiwidmFyaWF0aW9uIiwiYWxsb3dlZEJsb2NrcyIsIm9yaWVudGF0aW9uIiwidGVtcGxhdGVMb2NrIiwiYmFzZUNsYXNzTmFtZSIsInZhcmlhdGlvbkNsYXNzTmFtZSIsImJsb2NrQ2xhc3NOYW1lIiwiVGFnTmFtZSIsInJlbmRlckFwcGVuZGVyIiwiQnV0dG9uQmxvY2tBcHBlbmRlciIsImJsb2NrUHJvcHMiLCJjbGFzc05hbWUiLCJibG9ja3NUZW1wbGF0ZSIsImxldmVsIiwiY29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtzQkFDaURBLEVBQUUsQ0FBQ0MsVztJQUE1Q0MsVyxtQkFBQUEsVztJQUFhQyxRLG1CQUFBQSxRO0lBQVVDLGEsbUJBQUFBLGE7SUFDdkJDLEUsR0FBT0wsRUFBRSxDQUFDTSxJLENBQVZELEUsRUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRSxJQUFULE9BQTJEO0FBQUEsTUFBMUNDLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxVQUFlLFFBQWZBLFVBQWU7QUFFMUQ7QUFDQSxNQUFNQyxPQUFPLEdBQVVILFVBQVUsQ0FBQ0csT0FBbEM7QUFDQSxNQUFNQyxTQUFTLEdBQVFKLFVBQVUsQ0FBQ0ksU0FBbEM7QUFDQSxNQUFNQyxhQUFhLEdBQUlMLFVBQVUsQ0FBQ0ssYUFBbEM7QUFDQSxNQUFNQyxXQUFXLEdBQU1OLFVBQVUsQ0FBQ00sV0FBbEM7QUFDQSxNQUFNQyxZQUFZLEdBQUtQLFVBQVUsQ0FBQ08sWUFBWCxHQUEwQixRQUExQixHQUFxQyxLQUE1RCxDQVAwRCxDQVMxRDs7QUFDQSxNQUFNQyxhQUFhLEdBQVEsYUFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBSUwsU0FBRCxHQUFjSSxhQUFhLEdBQUcsSUFBaEIsR0FBdUJKLFNBQXJDLEdBQWlELEVBQTVFO0FBQ0EsTUFBTU0sY0FBYyxHQUFRRCxrQkFBRCxHQUF1QkQsYUFBYSxHQUFHLEdBQWhCLEdBQXNCQyxrQkFBN0MsR0FBa0VELGFBQTdGO0FBQ0EsTUFBTUcsT0FBTyxHQUFjUixPQUEzQixDQWIwRCxDQWUxRDtBQUNBOztBQUNBLE1BQU1TLGNBQWMsR0FBSVYsVUFBRCxHQUFlUixXQUFXLENBQUNtQixtQkFBM0IsR0FBaUQsS0FBeEUsQ0FqQjBELENBbUIxRDs7QUFDQSxNQUFNQyxVQUFVLEdBQUdsQixhQUFhLENBQUU7QUFDakNtQixhQUFTLEVBQUVMO0FBRHNCLEdBQUYsQ0FBaEM7QUFJQSxNQUFNTSxjQUFjLEdBQUcsQ0FDdEIsQ0FDQyxjQURELEVBRUM7QUFBRUMsU0FBSyxFQUFFLENBQVQ7QUFBWUMsV0FBTyxFQUFFckIsRUFBRSxDQUFFLGVBQUYsRUFBbUIsS0FBbkI7QUFBdkIsR0FGRCxDQURzQixFQUt0QixDQUNDLHFCQURELEVBRUMsRUFGRCxFQUdDLENBQ0MsQ0FDQyxnQkFERCxFQUVDO0FBQUVxQixXQUFPLEVBQUU7QUFBWCxHQUZELENBREQsQ0FIRCxDQUxzQixFQWV0QixDQUNDLGdCQURELEVBRUM7QUFBRUEsV0FBTyxFQUFFO0FBQVgsR0FGRCxDQWZzQixDQUF2QjtBQXFCQSxzQkFDQyx1REFDQyxvQkFBQyxPQUFELEVBQWFKLFVBQWIsZUFDTztBQUFLLGFBQVMsWUFBTU4sYUFBTjtBQUFkLGtCQUNMLG9CQUFDLFdBQUQ7QUFDQyxZQUFRLEVBQUdRLGNBRFo7QUFFQyxpQkFBYSxFQUFHWCxhQUZqQjtBQUdDLGdCQUFZLEVBQUdFLFlBSGhCO0FBSUMsZUFBVyxFQUFHRCxXQUpmO0FBS0Msa0JBQWMsRUFBR007QUFMbEIsSUFESyxDQURQLENBREQsZUFZQyxvQkFBQyxzREFBRDtBQUNDLGlCQUFhLEVBQUdYLGFBRGpCO0FBRUMsV0FBTyxFQUFHVTtBQUZYLElBWkQsQ0FERDtBQW1CQTs7QUFFY1osbUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvZWRpdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XHRJbm5lckJsb2NrcywgUmljaFRleHQsIHVzZUJsb2NrUHJvcHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbi8vIGNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuLy8gaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vJztcbmltcG9ydCBFZGl0U2V0dGluZ3MgZnJvbSAnLi9lZGl0LXNldHRpbmdzJztcblxuXG4vKipcbiAqIEVkaXQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cblx0Ly8gR2V0IGFuZCBzZXR1cCBhdHRyaWJ1dGVzXG5cdGNvbnN0IHRhZ05hbWUgICAgICAgID0gYXR0cmlidXRlcy50YWdOYW1lO1xuXHRjb25zdCB2YXJpYXRpb24gICAgICA9IGF0dHJpYnV0ZXMudmFyaWF0aW9uO1xuXHRjb25zdCBhbGxvd2VkQmxvY2tzICA9IGF0dHJpYnV0ZXMuYWxsb3dlZEJsb2Nrcztcblx0Y29uc3Qgb3JpZW50YXRpb24gICAgPSBhdHRyaWJ1dGVzLm9yaWVudGF0aW9uO1xuXHRjb25zdCB0ZW1wbGF0ZUxvY2sgICA9IGF0dHJpYnV0ZXMudGVtcGxhdGVMb2NrID8gJ2luc2VydCcgOiBmYWxzZTtcblxuXHQvLyBTZXR1cCBuZXcgdmFyaWFibGVzXG5cdGNvbnN0IGJhc2VDbGFzc05hbWUgICAgICA9IFwid2JsLXNlZ21lbnRcIjtcblx0Y29uc3QgdmFyaWF0aW9uQ2xhc3NOYW1lID0gKHZhcmlhdGlvbikgPyBiYXNlQ2xhc3NOYW1lICsgJy0tJyArIHZhcmlhdGlvbiA6ICcnO1xuXHRjb25zdCBibG9ja0NsYXNzTmFtZSAgICAgPSAodmFyaWF0aW9uQ2xhc3NOYW1lKSA/IGJhc2VDbGFzc05hbWUgKyAnICcgKyB2YXJpYXRpb25DbGFzc05hbWUgOiBiYXNlQ2xhc3NOYW1lO1xuXHRjb25zdCBUYWdOYW1lICAgICAgICAgICAgPSB0YWdOYW1lO1xuXG5cdC8vIElubmVyYmxvY2tzXG5cdC8vIGNvbnN0IHJlbmRlckFwcGVuZGVyID0gSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcjtcblx0Y29uc3QgcmVuZGVyQXBwZW5kZXIgPSAoaXNTZWxlY3RlZCkgPyBJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIDogZmFsc2U7XG5cblx0Ly8gU2V0dXAgYmxvY2tQcm9wc1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygge1xuXHRcdGNsYXNzTmFtZTogYmxvY2tDbGFzc05hbWVcblx0fSApO1xuXG5cdGNvbnN0IGJsb2Nrc1RlbXBsYXRlID0gW1xuXHRcdFtcblx0XHRcdCdjb3JlL2hlYWRpbmcnLFxuXHRcdFx0eyBsZXZlbDogMiwgY29udGVudDogX18oICdTZWdtZW50IFRpdGxlJywgJ3dibCcgKSB9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J3dibC9zZWdtZW50LWNvbnRlbnQnLFxuXHRcdFx0e30sXG5cdFx0XHRbXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdHsgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gY29tbW9kbyBsaWd1bGEgZWdldCBkb2xvci4gQWVuZWFuIG1hc3NhLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9XG5cdFx0XHRcdF1cblx0XHRcdF1cblx0XHRdLFxuXHRcdFtcblx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHR7IGNvbnRlbnQ6ICc8aT5TZWdtZW50IEZvb3RlcjwvaT4nIH1cblx0XHRdXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFRhZ05hbWUgey4uLmJsb2NrUHJvcHMgfT5cblx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPXsgYCR7YmFzZUNsYXNzTmFtZX1fX2lubmVyYCB9PlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBibG9ja3NUZW1wbGF0ZSB9XG5cdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgYWxsb3dlZEJsb2NrcyB9XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9eyB0ZW1wbGF0ZUxvY2sgfVxuXHRcdFx0XHRcdFx0b3JpZW50YXRpb249eyBvcmllbnRhdGlvbiB9XG5cdFx0XHRcdFx0XHRyZW5kZXJBcHBlbmRlcj17IHJlbmRlckFwcGVuZGVyIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvVGFnTmFtZT5cblx0XHRcdDxFZGl0U2V0dGluZ3Ncblx0XHRcdFx0c2V0QXR0cmlidXRlcz17IHNldEF0dHJpYnV0ZXMgfVxuXHRcdFx0XHR0YWdOYW1lPXsgVGFnTmFtZSB9XG5cdFx0XHQvPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/segment/edit.js\n");

/***/ }),

/***/ "./resources/blocks/segment/index.js":
/*!*******************************************!*\
  !*** ./resources/blocks/segment/index.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ \"./resources/blocks/segment/block.json\");\nvar _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ \"./resources/blocks/segment/block.json\", 1);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./resources/blocks/segment/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./resources/blocks/segment/save.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./resources/blocks/segment/styles.js\");\n/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ \"./resources/blocks/segment/variations.js\");\n/**\n * External dependancies\n */\nvar _lodash = lodash,\n    merge = _lodash.merge; // Imports\n\n\n\n\n\n // Get name from metadata\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name; // Merge the metadata with the edit and save functions\n\nvar settings = merge(_block_json__WEBPACK_IMPORTED_MODULE_0__, {\n  edit: _edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  variations: _variations__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}); // Export\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvaW5kZXguanM/MjUxYyJdLCJuYW1lcyI6WyJsb2Rhc2giLCJtZXJnZSIsIm5hbWUiLCJtZXRhZGF0YSIsInNldHRpbmdzIiwiZWRpdCIsInNhdmUiLCJ2YXJpYXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Y0FDa0JBLE07SUFBVkMsSyxXQUFBQSxLLEVBRVI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7SUFDUUMsSSxHQUFTQyx3QyxDQUFURCxJLEVBRVI7O0FBQ0EsSUFBTUUsUUFBUSxHQUFHSCxLQUFLLENBQUNFLHdDQUFELEVBQVc7QUFDaENFLE1BQUksRUFBRUEsNkNBRDBCO0FBRWhDQyxNQUFJLEVBQUVBLDZDQUYwQjtBQUdoQ0MsWUFBVSxFQUFFQSxtREFBVUE7QUFIVSxDQUFYLENBQXRCLEMsQ0FNQSIsImZpbGUiOiIuL3Jlc291cmNlcy9ibG9ja3Mvc2VnbWVudC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kYW5jaWVzXG4gKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IGxvZGFzaDtcblxuLy8gSW1wb3J0c1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSAnLi92YXJpYXRpb25zJztcblxuLy8gR2V0IG5hbWUgZnJvbSBtZXRhZGF0YVxuY29uc3QgeyBuYW1lIH0gPSBtZXRhZGF0YTtcblxuLy8gTWVyZ2UgdGhlIG1ldGFkYXRhIHdpdGggdGhlIGVkaXQgYW5kIHNhdmUgZnVuY3Rpb25zXG5jb25zdCBzZXR0aW5ncyA9IG1lcmdlKG1ldGFkYXRhLCB7XG5cdGVkaXQ6IGVkaXQsXG5cdHNhdmU6IHNhdmUsXG5cdHZhcmlhdGlvbnM6IHZhcmlhdGlvbnNcbn0pO1xuXG4vLyBFeHBvcnRcbmV4cG9ydCB7IG5hbWUsIHNldHRpbmdzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/blocks/segment/index.js\n");

/***/ }),

/***/ "./resources/blocks/segment/save.js":
/*!******************************************!*\
  !*** ./resources/blocks/segment/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Internal dependencies\n */\n\n/**\n * WordPress dependencies\n */\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    useBlockProps = _wp$blockEditor.useBlockProps;\n/**\n * Save function\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  // Get and setup attributes\n  var TagName = attributes.tagName;\n  var variation = attributes.variation;\n  var allowedBlocks = attributes.allowedBlocks;\n  var orientation = attributes.orientation;\n  var templateLock = attributes.templateLock; // Setup new variables\n\n  var baseClassName = \"wbl-segment\";\n  var variationClassName = variation ? baseClassName + '--' + variation : '';\n  var blockClassName = variationClassName ? baseClassName + ' ' + variationClassName : baseClassName; // Setup blockProps\n\n  var blockProps = useBlockProps.save({\n    className: blockClassName\n  });\n  return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(baseClassName, \"__inner\")\n  }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvc2F2ZS5qcz9lMDlkIl0sIm5hbWVzIjpbIndwIiwiYmxvY2tFZGl0b3IiLCJSaWNoVGV4dCIsIklubmVyQmxvY2tzIiwidXNlQmxvY2tQcm9wcyIsInNhdmUiLCJhdHRyaWJ1dGVzIiwiVGFnTmFtZSIsInRhZ05hbWUiLCJ2YXJpYXRpb24iLCJhbGxvd2VkQmxvY2tzIiwib3JpZW50YXRpb24iLCJ0ZW1wbGF0ZUxvY2siLCJiYXNlQ2xhc3NOYW1lIiwidmFyaWF0aW9uQ2xhc3NOYW1lIiwiYmxvY2tDbGFzc05hbWUiLCJibG9ja1Byb3BzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7c0JBQ2lEQSxFQUFFLENBQUNDLFc7SUFBNUNDLFEsbUJBQUFBLFE7SUFBVUMsVyxtQkFBQUEsVztJQUFhQyxhLG1CQUFBQSxhO0FBRS9CO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxJQUFULE9BQWdDO0FBQUEsTUFBZkMsVUFBZSxRQUFmQSxVQUFlO0FBRS9CO0FBQ0EsTUFBTUMsT0FBTyxHQUFVRCxVQUFVLENBQUNFLE9BQWxDO0FBQ0EsTUFBTUMsU0FBUyxHQUFRSCxVQUFVLENBQUNHLFNBQWxDO0FBQ0EsTUFBTUMsYUFBYSxHQUFJSixVQUFVLENBQUNJLGFBQWxDO0FBQ0EsTUFBTUMsV0FBVyxHQUFNTCxVQUFVLENBQUNLLFdBQWxDO0FBQ0EsTUFBTUMsWUFBWSxHQUFLTixVQUFVLENBQUNNLFlBQWxDLENBUCtCLENBUy9COztBQUNBLE1BQU1DLGFBQWEsR0FBUSxhQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHTCxTQUFTLEdBQUdJLGFBQWEsR0FBRyxJQUFoQixHQUF1QkosU0FBMUIsR0FBc0MsRUFBMUU7QUFDQSxNQUFNTSxjQUFjLEdBQU9ELGtCQUFrQixHQUFHRCxhQUFhLEdBQUcsR0FBaEIsR0FBc0JDLGtCQUF6QixHQUE4Q0QsYUFBM0YsQ0FaK0IsQ0FjL0I7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHWixhQUFhLENBQUNDLElBQWQsQ0FBb0I7QUFDaENZLGFBQVMsRUFBRUY7QUFEcUIsR0FBcEIsQ0FBbkI7QUFJQSxzQkFDQyxvQkFBQyxPQUFELEVBQWFDLFVBQWIsZUFDQztBQUFLLGFBQVMsWUFBTUgsYUFBTjtBQUFkLGtCQUNDLG9CQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQsQ0FERCxDQUREO0FBT0E7O0FBRWNSLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Jsb2Nrcy9zZWdtZW50L3NhdmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IFJpY2hUZXh0LCBJbm5lckJsb2NrcywgdXNlQmxvY2tQcm9wcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8qKlxuICogU2F2ZSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblxuXHQvLyBHZXQgYW5kIHNldHVwIGF0dHJpYnV0ZXNcblx0Y29uc3QgVGFnTmFtZSAgICAgICAgPSBhdHRyaWJ1dGVzLnRhZ05hbWU7XG5cdGNvbnN0IHZhcmlhdGlvbiAgICAgID0gYXR0cmlidXRlcy52YXJpYXRpb247XG5cdGNvbnN0IGFsbG93ZWRCbG9ja3MgID0gYXR0cmlidXRlcy5hbGxvd2VkQmxvY2tzO1xuXHRjb25zdCBvcmllbnRhdGlvbiAgICA9IGF0dHJpYnV0ZXMub3JpZW50YXRpb247XG5cdGNvbnN0IHRlbXBsYXRlTG9jayAgID0gYXR0cmlidXRlcy50ZW1wbGF0ZUxvY2s7XG5cblx0Ly8gU2V0dXAgbmV3IHZhcmlhYmxlc1xuXHRjb25zdCBiYXNlQ2xhc3NOYW1lICAgICAgPSBcIndibC1zZWdtZW50XCI7XG5cdGNvbnN0IHZhcmlhdGlvbkNsYXNzTmFtZSA9IHZhcmlhdGlvbiA/IGJhc2VDbGFzc05hbWUgKyAnLS0nICsgdmFyaWF0aW9uIDogJyc7XG5cdGNvbnN0IGJsb2NrQ2xhc3NOYW1lICAgICA9IHZhcmlhdGlvbkNsYXNzTmFtZSA/IGJhc2VDbGFzc05hbWUgKyAnICcgKyB2YXJpYXRpb25DbGFzc05hbWUgOiBiYXNlQ2xhc3NOYW1lO1xuXG5cdC8vIFNldHVwIGJsb2NrUHJvcHNcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMuc2F2ZSgge1xuICAgICAgICBjbGFzc05hbWU6IGJsb2NrQ2xhc3NOYW1lXG4gICAgfSApO1xuXG5cdHJldHVybiAoXG5cdFx0PFRhZ05hbWUgey4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgYCR7YmFzZUNsYXNzTmFtZX1fX2lubmVyYCB9PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9UYWdOYW1lPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYXZlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/segment/save.js\n");

/***/ }),

/***/ "./resources/blocks/segment/styles.js":
/*!********************************************!*\
  !*** ./resources/blocks/segment/styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n/**\n * Template option choices for predefined columns layouts.\n */\n\nvar styles = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (styles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvc3R5bGVzLmpzPzI5YTAiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJzdHlsZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0lBQ1FBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7QUFFUjtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUcsTUFBTSxHQUFHLEVBQWY7QUFFZUEscUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogVGVtcGxhdGUgb3B0aW9uIGNob2ljZXMgZm9yIHByZWRlZmluZWQgY29sdW1ucyBsYXlvdXRzLlxuICovXG5jb25zdCBzdHlsZXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/segment/styles.js\n");

/***/ }),

/***/ "./resources/blocks/segment/variations.js":
/*!************************************************!*\
  !*** ./resources/blocks/segment/variations.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n/**\n * Template option choices for predefined columns layouts.\n */\n\nvar variations = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (variations);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvdmFyaWF0aW9ucy5qcz9iNTRlIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwidmFyaWF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7SUFDUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtBQUVSO0FBQ0E7QUFDQTs7QUFDQSxJQUFNRyxVQUFVLEdBQUcsRUFBbkI7QUFFZUEseUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYmxvY2tzL3NlZ21lbnQvdmFyaWF0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIFRlbXBsYXRlIG9wdGlvbiBjaG9pY2VzIGZvciBwcmVkZWZpbmVkIGNvbHVtbnMgbGF5b3V0cy5cbiAqL1xuY29uc3QgdmFyaWF0aW9ucyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYXRpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/blocks/segment/variations.js\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./resources/blocks/blocks.js ./resources/blocks/blocks.editor.css ./resources/blocks/blocks.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Erik\Webdev\www\climate-campus\public_html\wp-content\plugins\wbl-blocks\resources\blocks\blocks.js */"./resources/blocks/blocks.js");
__webpack_require__(/*! C:\Users\Erik\Webdev\www\climate-campus\public_html\wp-content\plugins\wbl-blocks\resources\blocks\blocks.editor.css */"./resources/blocks/blocks.editor.css");
module.exports = __webpack_require__(/*! C:\Users\Erik\Webdev\www\climate-campus\public_html\wp-content\plugins\wbl-blocks\resources\blocks\blocks.css */"./resources/blocks/blocks.css");


/***/ })

/******/ });