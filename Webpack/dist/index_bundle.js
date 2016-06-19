/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Parent = __webpack_require__(2);

	React.render(React.createElement(Parent, null), document.getElementById('app'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Child = __webpack_require__(3);

	var Parent = React.createClass({
	  displayName: "Parent",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        null,
	        " This is the parent. "
	      ),
	      React.createElement(Child, { name: "child" })
	    );
	  }
	});

	module.exports = Parent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Child = React.createClass({
	  displayName: "Child",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      "and this is the ",
	      React.createElement(
	        "b",
	        null,
	        this.props.name
	      ),
	      "."
	    );
	  }
	});

	module.exports = Child;

/***/ }
/******/ ]);