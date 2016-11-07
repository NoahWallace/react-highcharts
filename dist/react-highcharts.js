(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

	"use strict";

	var Chart_1 = __webpack_require__(1);
	exports.Chart = Chart_1.Chart;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var utils_1 = __webpack_require__(3);

	var Chart = function (_React$Component) {
	    _inherits(Chart, _React$Component);

	    function Chart() {
	        _classCallCheck(this, Chart);

	        return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
	    }

	    _createClass(Chart, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            utils_1.HInit(this.props.id, this.props.config);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement("div", { id: this.props.id });
	        }
	    }]);

	    return Chart;
	}(React.Component);

	exports.Chart = Chart;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("React");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var HighChartsInit_1 = __webpack_require__(4);
	exports.HInit = HighChartsInit_1.HInit;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Highcharts = __webpack_require__(5);
	exports.HInit = function (id, config) {
	    var wrapRedraw = function wrapRedraw(chart) {
	        var redraw = chart.redraw;
	        chart.redraw = function () {
	            redraw.apply(chart, null);
	            console.log('redraw');
	        };
	    };
	    return Highcharts.chart(id, config, function (chart) {
	        wrapRedraw(chart);
	    });
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("Highcharts");

/***/ }
/******/ ])));