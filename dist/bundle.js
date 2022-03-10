/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body {\n\tmargin: 0;\n\tdisplay: flex;\n}\n\n.header {\n\tdisplay: flex;\n}\n\n.title {\n\tcolor: green;\n\tfont-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n\t\t\"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n\tfont-size: 40px;\n\n\tmargin: 0;\n\n\tcursor: pointer;\n}\n\n#gameContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tgap: 50px;\n\tmargin-top: 100px;\n}\n#board1,\n#board2 {\n\tdisplay: none;\n}\n\n.board {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\tborder-style: solid;\n\tborder-color: black;\n\tborder-width: 1px;\n\twidth: 450px;\n\theight: 450px;\n}\n\n#board1Message {\n\tfont-size: 25px;\n}\n\n#directionBtn {\n\tdisplay: none;\n\tborder-style: none;\n\tcolor: gray;\n\n\tpadding: 5px;\n\tmargin-bottom: 5px;\n\n\tcursor: pointer;\n}\n\n.cell {\n\tflex: 1 0 9%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tborder-color: rgb(78, 78, 78);\n\tborder-width: 1px;\n\tborder-style: solid;\n\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.cell:hover {\n\tcursor: pointer;\n}\n\n.shipCell {\n\tbackground-color: rgb(59, 134, 59);\n}\n\n.hitShipCell {\n\tbackground-color: rgb(173, 45, 45);\n}\n\n.cpuCell:hover {\n\tcursor: pointer;\n}\n\n.addShipHover {\n\tbackground-color: blanchedalmond;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ;oDACmD;CACnD,eAAe;;CAEf,SAAS;;CAET,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,uBAAuB;;CAEvB,SAAS;CACT,iBAAiB;AAClB;AACA;;CAEC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;;CAEnB,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,WAAW;;CAEX,YAAY;CACZ,kBAAkB;;CAElB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;;CAEnB,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;;CAEnB,2BAA2B;CAC3B,yBAAyB;CACzB,wBAAwB;CACxB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;AAClB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gCAAgC;AACjC","sourcesContent":[".body {\n\tmargin: 0;\n\tdisplay: flex;\n}\n\n.header {\n\tdisplay: flex;\n}\n\n.title {\n\tcolor: green;\n\tfont-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n\t\t\"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n\tfont-size: 40px;\n\n\tmargin: 0;\n\n\tcursor: pointer;\n}\n\n#gameContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tgap: 50px;\n\tmargin-top: 100px;\n}\n#board1,\n#board2 {\n\tdisplay: none;\n}\n\n.board {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\tborder-style: solid;\n\tborder-color: black;\n\tborder-width: 1px;\n\twidth: 450px;\n\theight: 450px;\n}\n\n#board1Message {\n\tfont-size: 25px;\n}\n\n#directionBtn {\n\tdisplay: none;\n\tborder-style: none;\n\tcolor: gray;\n\n\tpadding: 5px;\n\tmargin-bottom: 5px;\n\n\tcursor: pointer;\n}\n\n.cell {\n\tflex: 1 0 9%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tborder-color: rgb(78, 78, 78);\n\tborder-width: 1px;\n\tborder-style: solid;\n\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.cell:hover {\n\tcursor: pointer;\n}\n\n.shipCell {\n\tbackground-color: rgb(59, 134, 59);\n}\n\n.hitShipCell {\n\tbackground-color: rgb(173, 45, 45);\n}\n\n.cpuCell:hover {\n\tcursor: pointer;\n}\n\n.addShipHover {\n\tbackground-color: blanchedalmond;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createGameboard.js":
/*!********************************!*\
  !*** ./src/createGameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameboard": () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _createShip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createShip.js */ "./src/createShip.js");

;

function createGameboard() {
	// this board displays all ships currently on the board
	let board = Array.apply(null, new Array(10)).map(function () {
		return [...Array(10)]
	})

	// this board only displays hits/misses for purposes of rendering
	let hiddenBoard = Array.apply(null, new Array(10)).map(function () {
		return [...Array(10)]
	})

	let ships = []

	function placeShip(y, x, direction, length) {
		if (!length) {
			length = detectShipToPlace()
		}

		if (!checkPlacement(y, x, direction, length)) {
			return
		}

		let newShip = (0,_createShip_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(length, ships)
		ships.push(newShip)

		//the name of the ship is put on each coordinate where it is located
		//as well as a number indicating which 'spot' on the ship it is

		for (let i = 0; i < length; i++) {
			if (direction == "h") {
				board[y][x + i] = [newShip.name, i]
			} else if (direction == "v") {
				board[y + i][x] = [newShip.name, i]
			}
		}
	}

	// when initializing board at start, ships will be placed sequentially
	// starting from carrier moving down. This function checks the ship array
	// to see which one needs to be placed next, returning appropriate length
	// to pass into createShip

	function detectShipToPlace() {
		if (ships.length === 0) {
			return 5
		}
		if (ships.length === 1) {
			return 4
		}
		if (ships.length === 2 || ships.length === 3) {
			return 3
		}
		if (ships.length === 4) {
			return 2
		}
	}

	function checkPlacement(y, x, direction, length) {
		if (direction === "h") {
			if (x + length > 10) {
				return false
			}
			for (let i = 0; i < length; i++) {
				if (board[y][x + i]) {
					return false
				}
			}
		}
		if (direction === "v") {
			if (y + length > 10) {
				return false
			}
			for (let i = 0; i < length; i++) {
				if (board[y + i][x]) {
					return false
				}
			}
		}
		return true
	}

	function receiveAttack(y, x) {
		let attack = board[y][x]
		if (attack === undefined) {
			board[y][x] = "miss"
			hiddenBoard[y][x] = "miss"
		} else {
			// since attack did hit a ship, find the ship in the ships array with the matching name
			let target = ships.find((ship) => {
				return ship.name == attack[0]
			})

			target.hit(attack[1])
			board[y][x].push("hit")
			hiddenBoard[y][x] = "hit"
		}
	}

	function allSunk() {
		return ships.every((ship) => {
			return ship.isSunk()
		})
	}

	return {
		board,
		hiddenBoard,
		ships,
		placeShip,
		receiveAttack,
		checkPlacement,
		allSunk,
	}
}


/***/ }),

/***/ "./src/createShip.js":
/*!***************************!*\
  !*** ./src/createShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });


function createShip(shipLength, ships) {
	let length = []
	for (let i = 1; i <= shipLength; i++) {
		length.push(0)
	}

	let doesCruiserExist = ships.some((ship) => {
		return ship.name === "cruiser"
	})

	let name
	if (length.length == 2) {
		name = "destroyer"
	}
	if (length.length == 3 && doesCruiserExist === false) {
		name = "cruiser"
	} else if (length.length == 3 && doesCruiserExist === true) {
		name = "submarine"
	}
	if (length.length == 4) {
		name = "battleship"
	}
	if (length.length == 5) {
		name = "aircraftCarrier"
	}

	function hit(position) {
		this.length[position] = 1
	}

	function isSunk() {
		return length.every((position) => {
			return position
		})
	}

	return {
		length,
		name,
		hit,
		isSunk,
	}
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "cpu": () => (/* binding */ cpu)
/* harmony export */ });


function player(name, turn) {
	name = name
	turn = turn

	// this is an array of areas which can still RECEIVE an attack
	// enemy CPUs use this to select a coordinate at random
	// ensures that no spot is attacked twice as each coord is removed after used
	let attackableSpots = []
	for (let y = 0; y <= 9; y++) {
		for (let x = 0; x <= 9; x++) {
			let pair = [y, x]
			attackableSpots.push(pair)
		}
	}

	function endTurn(enemyPlayer) {
		if (this.turn === true) {
			this.turn = false
			if (enemyPlayer) enemyPlayer.startTurn()
		}
	}

	function startTurn() {
		if (this.turn === false) {
			this.turn = true
		}
	}

	function checkIfAttackValid(enemyBoard, y, x) {
		if (enemyBoard.hiddenBoard[y][x]) {
			return false
		} else {
			return true
		}
	}

	function attack(enemyPlayer, enemyBoard, y, x) {
		// if a spot has already been hit, then it will be defined on hiddenBoard
		// so the rest will only work if the spot has not already been hit

		if (!checkIfAttackValid(enemyBoard, y, x)) {
			return
		}
		enemyBoard.receiveAttack(y, x)
		let attackedIndex = findCoordsIndex(enemyPlayer.attackableSpots, y, x)
		enemyPlayer.attackableSpots.splice(attackedIndex, 1)

		if (this.turn === true) {
			this.endTurn(enemyPlayer)
		}
	}

	// returns index of given coordinates within given attackableSpots
	function findCoordsIndex(array, y, x) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][0] === y && array[i][1] === x) {
				return i
			}
		}
	}

	return {
		name,
		turn,
		attackableSpots,
		endTurn,
		startTurn,
		checkIfAttackValid,
		attack,
	}
}

function cpu(name, turn) {
	let prototype = player(name, turn)

	function randomAttack(enemyPlayer, enemyBoard) {
		// if (this.turn !== true) {
		// 	return
		// }

		let attackedIndex = getRandomInt(0, enemyPlayer.attackableSpots.length)
		let attackedCoords = enemyPlayer.attackableSpots[attackedIndex]

		enemyBoard.receiveAttack(attackedCoords[0], attackedCoords[1])

		enemyPlayer.attackableSpots.splice(attackedIndex, 1)

		this.endTurn(enemyPlayer)
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	function placeRandom(board) {
		if (!board) {
			return
		}

		while (board.ships.length < 5) {
			let yCoord = getRandomInt(0, 10)
			let xCoord = getRandomInt(0, 10)
			let direction = getRandomInt(0, 2)

			if (direction === 0) {
				direction = "h"
			} else {
				direction = "v"
			}

			board.placeShip(yCoord, xCoord, direction)
		}

		// while (board.ships.length < 5) {
		// 	board.placeShip(yCoord, xCoord, direction)
		// }
	}

	return Object.assign({}, prototype, { randomAttack, placeRandom })
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _createGameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGameboard.js */ "./src/createGameboard.js");
/* harmony import */ var _createShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createShip.js */ "./src/createShip.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





function cacheDom() {
	let title = document.querySelector(".title")
	let board1Message = document.querySelector("#board1Message")
	let directionBtn = document.querySelector("#directionBtn")
	let player1Dom = document.querySelector("#board1")
	let player2Dom = document.querySelector("#board2")
	let cells = Array.from(document.querySelectorAll(".cell"))
	let cpuCells = Array.from(document.querySelectorAll(".cpuCell"))

	return {
		title,
		board1Message,
		directionBtn,
		player1Dom,
		player2Dom,
		cells,
		cpuCells,
	}
}
let dom = cacheDom()

let player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.player)("player1", false)
let player1Board = (0,_createGameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)()
let cpu1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.cpu)("cpu", false)
let cpu1Board = (0,_createGameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)()
cpu1.placeRandom(cpu1Board)
renderStart()
dom.title.addEventListener("click", () => {
	resetGame()
})

function renderStart() {
	dom.player1Dom.style.display = "flex"
	dom.directionBtn.style.display = "flex"
	dom.board1Message.style.display = "flex"
	dom.player1Dom.innerHTML = ""
	dom.player2Dom.style.display = "none"
	dom.player2Dom.innerHTML = ""

	player1Board.board.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			// if coord has an array, there is a ship there
			if (Array.isArray(cell)) {
				domCell.classList.add("shipCell")
			}

			domCell.classList.add("cell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player1Dom.appendChild(domCell)
		})
	})

	dom = cacheDom()
	dom.cells.forEach((cell) => {
		cell.addEventListener("mouseover", hoverEventStart)
	})
	dom.cells.forEach((cell) => {
		cell.addEventListener("click", clickEventStart)
	})

	dom.board1Message.textContent = getMessageStart()

	checkIfReady()
}

dom.directionBtn.addEventListener("click", (e) => {
	if (e.target.dataset.direction === "h") {
		e.target.dataset.direction = "v"
		return
	} else if (e.target.dataset.direction === "v") {
		e.target.dataset.direction = "h"
		return
	}
})

function clickEventStart(e) {
	let coords = e.target.dataset.coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	let direction = dom.directionBtn.dataset.direction
	player1Board.placeShip(coords[0], coords[1], direction)
	renderStart()
}

// hover only shows if placement is valid
function hoverEventStart(e) {
	dom.cells.forEach((cell) => {
		cell.classList.remove("addShipHover")
	})

	let coords = e.target.dataset.coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	let direction = dom.directionBtn.dataset.direction
	let hoverLength = getHoverLength()

	if (
		!player1Board.checkPlacement(
			coords[0],
			coords[1],
			direction,
			hoverLength
		)
	) {
		return
	}

	let index = dom.cells.indexOf(e.target)
	for (let i = 0; i < hoverLength; i++) {
		if (direction === "h") {
			dom.cells[index + i].classList.add("addShipHover")
		}
		if (direction === "v") {
			dom.cells[index + 10 * i].classList.add("addShipHover")
		}
	}
}

function getHoverLength() {
	if (player1Board.ships.length === 0) {
		return 5
	}
	if (player1Board.ships.length === 1) {
		return 4
	}
	if (player1Board.ships.length === 2) {
		return 3
	}
	if (player1Board.ships.length === 3) {
		return 3
	}
	if (player1Board.ships.length === 4) {
		return 2
	}
}

// check ship array length, show message saying what ship will be added next
function getMessageStart() {
	dom.board1Message.textContent = ""

	if (player1Board.ships.length === 0) {
		return "Place your carrier"
	}
	if (player1Board.ships.length === 1) {
		return "Place your battleship"
	}
	if (player1Board.ships.length === 2) {
		return "Place your cruiser"
	}
	if (player1Board.ships.length === 3) {
		return "Place your submarine"
	}
	if (player1Board.ships.length === 4) {
		return "Place your destroyer"
	}
}

function checkIfReady() {
	if (player1Board.ships.length === 5) {
		console.log("ready")
		dom.board1Message.style.display = "none"
		dom.directionBtn.style.display = "none"
		renderBoards()
	}
}

// iterates through gameboards, rendering based on each cell
// cpu board is the hiddenBoard, whereas player can see ships on their own board
// gives each dom cell the corresponding coordinates
function renderBoards() {
	dom.player1Dom.style.display = "flex"
	dom.player2Dom.style.display = "flex"
	dom.player1Dom.innerHTML = ""
	dom.player2Dom.innerHTML = ""

	player1Board.board.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			// if coord has an array, there is a ship there
			if (Array.isArray(cell)) {
				domCell.classList.add("shipCell")

				if (cell.includes("hit")) {
					domCell.classList.add("hitShipCell")
				}
			}

			domCell.classList.add("cell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player1Dom.appendChild(domCell)
		})
	})
	cpu1Board.hiddenBoard.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			if (cell === "hit") {
				domCell.classList.add("hitShipCell")
			}

			domCell.classList.add("cell")
			domCell.classList.add("cpuCell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player2Dom.appendChild(domCell)
		})
	})

	dom = cacheDom()
	dom.cpuCells.forEach((cell) => {
		cell.addEventListener("click", clickEvent, { once: true })
	})
}

// used when rendering gameboards
function determineCellDisplay(cell) {
	if (cell === undefined) {
		return "&nbsp"
	}
	if (cell === "miss") {
		return "&#10060;"
	}

	return ""
}

// event applied to each cell on render
function clickEvent(e) {
	// turn dataset coords into array
	let coords = e.target.dataset.coords
	coords = coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	if (!player1.checkIfAttackValid(cpu1Board, coords[0], coords[1])) {
		return
	}

	player1.attack(cpu1, cpu1Board, coords[0], coords[1])
	cpu1.randomAttack(player1, player1Board)

	renderBoards()

	if (cpu1Board.allSunk()) {
		winEvent(player1)
	} else if (player1Board.allSunk()) {
		winEvent(cpu1)
	}
}

function winEvent(player) {
	alert(`${player.name} wins!`)
	resetGame()
}

function resetGame() {
	player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.player)("player1", false)
	player1Board = (0,_createGameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)()
	cpu1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.cpu)("cpu", false)
	cpu1Board = (0,_createGameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)()
	cpu1.placeRandom(cpu1Board)
	renderStart()
}

// display player names
// let player change name

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0QsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0RBQU07QUFDakIsZ0JBQWdCLG9FQUFlO0FBQy9CLFFBQVEsK0NBQUc7QUFDWCxhQUFhLG9FQUFlO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuXFx0XFx0XFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcblxcdG1hcmdpbjogMDtcXG5cXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNnYW1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGdhcDogNTBweDtcXG5cXHRtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuI2JvYXJkMSxcXG4jYm9hcmQyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1mbG93OiByb3cgd3JhcDtcXG5cXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdGJvcmRlci1jb2xvcjogYmxhY2s7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxuXFx0d2lkdGg6IDQ1MHB4O1xcblxcdGhlaWdodDogNDUwcHg7XFxufVxcblxcbiNib2FyZDFNZXNzYWdlIHtcXG5cXHRmb250LXNpemU6IDI1cHg7XFxufVxcblxcbiNkaXJlY3Rpb25CdG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdGNvbG9yOiBncmF5O1xcblxcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbCB7XFxuXFx0ZmxleDogMSAwIDklO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXBDZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDEzNCwgNTkpO1xcbn1cXG5cXG4uaGl0U2hpcENlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDQ1LCA0NSk7XFxufVxcblxcbi5jcHVDZWxsOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRTaGlwSG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1o7b0RBQ21EO0NBQ25ELGVBQWU7O0NBRWYsU0FBUzs7Q0FFVCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1Qjs7Q0FFdkIsU0FBUztDQUNULGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7O0NBRW5CLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixXQUFXOztDQUVYLFlBQVk7Q0FDWixrQkFBa0I7O0NBRWxCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsbUJBQW1COztDQUVuQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcblxcdFxcdFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXG5cXHRtYXJnaW46IDA7XFxuXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZ2FtZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRnYXA6IDUwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbiNib2FyZDEsXFxuI2JvYXJkMiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogcm93IHdyYXA7XFxuXFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXHRib3JkZXItY29sb3I6IGJsYWNrO1xcblxcdGJvcmRlci13aWR0aDogMXB4O1xcblxcdHdpZHRoOiA0NTBweDtcXG5cXHRoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4jYm9hcmQxTWVzc2FnZSB7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4jZGlyZWN0aW9uQnRuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRjb2xvcjogZ3JheTtcXG5cXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcblxcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNlbGwge1xcblxcdGZsZXg6IDEgMCA5JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwQ2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxMzQsIDU5KTtcXG59XFxuXFxuLmhpdFNoaXBDZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCA0NSwgNDUpO1xcbn1cXG5cXG4uY3B1Q2VsbDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU2hpcEhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vY3JlYXRlU2hpcC5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcblx0Ly8gdGhpcyBib2FyZCBkaXNwbGF5cyBhbGwgc2hpcHMgY3VycmVudGx5IG9uIHRoZSBib2FyZFxuXHRsZXQgYm9hcmQgPSBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkoMTApKS5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBbLi4uQXJyYXkoMTApXVxuXHR9KVxuXG5cdC8vIHRoaXMgYm9hcmQgb25seSBkaXNwbGF5cyBoaXRzL21pc3NlcyBmb3IgcHVycG9zZXMgb2YgcmVuZGVyaW5nXG5cdGxldCBoaWRkZW5Cb2FyZCA9IEFycmF5LmFwcGx5KG51bGwsIG5ldyBBcnJheSgxMCkpLm1hcChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIFsuLi5BcnJheSgxMCldXG5cdH0pXG5cblx0bGV0IHNoaXBzID0gW11cblxuXHRmdW5jdGlvbiBwbGFjZVNoaXAoeSwgeCwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcblx0XHRpZiAoIWxlbmd0aCkge1xuXHRcdFx0bGVuZ3RoID0gZGV0ZWN0U2hpcFRvUGxhY2UoKVxuXHRcdH1cblxuXHRcdGlmICghY2hlY2tQbGFjZW1lbnQoeSwgeCwgZGlyZWN0aW9uLCBsZW5ndGgpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRsZXQgbmV3U2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoLCBzaGlwcylcblx0XHRzaGlwcy5wdXNoKG5ld1NoaXApXG5cblx0XHQvL3RoZSBuYW1lIG9mIHRoZSBzaGlwIGlzIHB1dCBvbiBlYWNoIGNvb3JkaW5hdGUgd2hlcmUgaXQgaXMgbG9jYXRlZFxuXHRcdC8vYXMgd2VsbCBhcyBhIG51bWJlciBpbmRpY2F0aW5nIHdoaWNoICdzcG90JyBvbiB0aGUgc2hpcCBpdCBpc1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcImhcIikge1xuXHRcdFx0XHRib2FyZFt5XVt4ICsgaV0gPSBbbmV3U2hpcC5uYW1lLCBpXVxuXHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2XCIpIHtcblx0XHRcdFx0Ym9hcmRbeSArIGldW3hdID0gW25ld1NoaXAubmFtZSwgaV1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyB3aGVuIGluaXRpYWxpemluZyBib2FyZCBhdCBzdGFydCwgc2hpcHMgd2lsbCBiZSBwbGFjZWQgc2VxdWVudGlhbGx5XG5cdC8vIHN0YXJ0aW5nIGZyb20gY2FycmllciBtb3ZpbmcgZG93bi4gVGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIHNoaXAgYXJyYXlcblx0Ly8gdG8gc2VlIHdoaWNoIG9uZSBuZWVkcyB0byBiZSBwbGFjZWQgbmV4dCwgcmV0dXJuaW5nIGFwcHJvcHJpYXRlIGxlbmd0aFxuXHQvLyB0byBwYXNzIGludG8gY3JlYXRlU2hpcFxuXG5cdGZ1bmN0aW9uIGRldGVjdFNoaXBUb1BsYWNlKCkge1xuXHRcdGlmIChzaGlwcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiA1XG5cdFx0fVxuXHRcdGlmIChzaGlwcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdHJldHVybiA0XG5cdFx0fVxuXHRcdGlmIChzaGlwcy5sZW5ndGggPT09IDIgfHwgc2hpcHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gM1xuXHRcdH1cblx0XHRpZiAoc2hpcHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRyZXR1cm4gMlxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50KHksIHgsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcblx0XHRcdGlmICh4ICsgbGVuZ3RoID4gMTApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChib2FyZFt5XVt4ICsgaV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuXHRcdFx0aWYgKHkgKyBsZW5ndGggPiAxMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGJvYXJkW3kgKyBpXVt4XSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHRmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHksIHgpIHtcblx0XHRsZXQgYXR0YWNrID0gYm9hcmRbeV1beF1cblx0XHRpZiAoYXR0YWNrID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGJvYXJkW3ldW3hdID0gXCJtaXNzXCJcblx0XHRcdGhpZGRlbkJvYXJkW3ldW3hdID0gXCJtaXNzXCJcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gc2luY2UgYXR0YWNrIGRpZCBoaXQgYSBzaGlwLCBmaW5kIHRoZSBzaGlwIGluIHRoZSBzaGlwcyBhcnJheSB3aXRoIHRoZSBtYXRjaGluZyBuYW1lXG5cdFx0XHRsZXQgdGFyZ2V0ID0gc2hpcHMuZmluZCgoc2hpcCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc2hpcC5uYW1lID09IGF0dGFja1swXVxuXHRcdFx0fSlcblxuXHRcdFx0dGFyZ2V0LmhpdChhdHRhY2tbMV0pXG5cdFx0XHRib2FyZFt5XVt4XS5wdXNoKFwiaGl0XCIpXG5cdFx0XHRoaWRkZW5Cb2FyZFt5XVt4XSA9IFwiaGl0XCJcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBhbGxTdW5rKCkge1xuXHRcdHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNoaXAuaXNTdW5rKClcblx0XHR9KVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRib2FyZCxcblx0XHRoaWRkZW5Cb2FyZCxcblx0XHRzaGlwcyxcblx0XHRwbGFjZVNoaXAsXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRjaGVja1BsYWNlbWVudCxcblx0XHRhbGxTdW5rLFxuXHR9XG59XG4iLCJleHBvcnQgeyBjcmVhdGVTaGlwIH1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwTGVuZ3RoLCBzaGlwcykge1xuXHRsZXQgbGVuZ3RoID0gW11cblx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0bGVuZ3RoLnB1c2goMClcblx0fVxuXG5cdGxldCBkb2VzQ3J1aXNlckV4aXN0ID0gc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuXHRcdHJldHVybiBzaGlwLm5hbWUgPT09IFwiY3J1aXNlclwiXG5cdH0pXG5cblx0bGV0IG5hbWVcblx0aWYgKGxlbmd0aC5sZW5ndGggPT0gMikge1xuXHRcdG5hbWUgPSBcImRlc3Ryb3llclwiXG5cdH1cblx0aWYgKGxlbmd0aC5sZW5ndGggPT0gMyAmJiBkb2VzQ3J1aXNlckV4aXN0ID09PSBmYWxzZSkge1xuXHRcdG5hbWUgPSBcImNydWlzZXJcIlxuXHR9IGVsc2UgaWYgKGxlbmd0aC5sZW5ndGggPT0gMyAmJiBkb2VzQ3J1aXNlckV4aXN0ID09PSB0cnVlKSB7XG5cdFx0bmFtZSA9IFwic3VibWFyaW5lXCJcblx0fVxuXHRpZiAobGVuZ3RoLmxlbmd0aCA9PSA0KSB7XG5cdFx0bmFtZSA9IFwiYmF0dGxlc2hpcFwiXG5cdH1cblx0aWYgKGxlbmd0aC5sZW5ndGggPT0gNSkge1xuXHRcdG5hbWUgPSBcImFpcmNyYWZ0Q2FycmllclwiXG5cdH1cblxuXHRmdW5jdGlvbiBoaXQocG9zaXRpb24pIHtcblx0XHR0aGlzLmxlbmd0aFtwb3NpdGlvbl0gPSAxXG5cdH1cblxuXHRmdW5jdGlvbiBpc1N1bmsoKSB7XG5cdFx0cmV0dXJuIGxlbmd0aC5ldmVyeSgocG9zaXRpb24pID0+IHtcblx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdH0pXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxlbmd0aCxcblx0XHRuYW1lLFxuXHRcdGhpdCxcblx0XHRpc1N1bmssXG5cdH1cbn1cbiIsImV4cG9ydCB7IHBsYXllciwgY3B1IH1cblxuZnVuY3Rpb24gcGxheWVyKG5hbWUsIHR1cm4pIHtcblx0bmFtZSA9IG5hbWVcblx0dHVybiA9IHR1cm5cblxuXHQvLyB0aGlzIGlzIGFuIGFycmF5IG9mIGFyZWFzIHdoaWNoIGNhbiBzdGlsbCBSRUNFSVZFIGFuIGF0dGFja1xuXHQvLyBlbmVteSBDUFVzIHVzZSB0aGlzIHRvIHNlbGVjdCBhIGNvb3JkaW5hdGUgYXQgcmFuZG9tXG5cdC8vIGVuc3VyZXMgdGhhdCBubyBzcG90IGlzIGF0dGFja2VkIHR3aWNlIGFzIGVhY2ggY29vcmQgaXMgcmVtb3ZlZCBhZnRlciB1c2VkXG5cdGxldCBhdHRhY2thYmxlU3BvdHMgPSBbXVxuXHRmb3IgKGxldCB5ID0gMDsgeSA8PSA5OyB5KyspIHtcblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8PSA5OyB4KyspIHtcblx0XHRcdGxldCBwYWlyID0gW3ksIHhdXG5cdFx0XHRhdHRhY2thYmxlU3BvdHMucHVzaChwYWlyKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGVuZFR1cm4oZW5lbXlQbGF5ZXIpIHtcblx0XHRpZiAodGhpcy50dXJuID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLnR1cm4gPSBmYWxzZVxuXHRcdFx0aWYgKGVuZW15UGxheWVyKSBlbmVteVBsYXllci5zdGFydFR1cm4oKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0YXJ0VHVybigpIHtcblx0XHRpZiAodGhpcy50dXJuID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy50dXJuID0gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrSWZBdHRhY2tWYWxpZChlbmVteUJvYXJkLCB5LCB4KSB7XG5cdFx0aWYgKGVuZW15Qm9hcmQuaGlkZGVuQm9hcmRbeV1beF0pIHtcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGF0dGFjayhlbmVteVBsYXllciwgZW5lbXlCb2FyZCwgeSwgeCkge1xuXHRcdC8vIGlmIGEgc3BvdCBoYXMgYWxyZWFkeSBiZWVuIGhpdCwgdGhlbiBpdCB3aWxsIGJlIGRlZmluZWQgb24gaGlkZGVuQm9hcmRcblx0XHQvLyBzbyB0aGUgcmVzdCB3aWxsIG9ubHkgd29yayBpZiB0aGUgc3BvdCBoYXMgbm90IGFscmVhZHkgYmVlbiBoaXRcblxuXHRcdGlmICghY2hlY2tJZkF0dGFja1ZhbGlkKGVuZW15Qm9hcmQsIHksIHgpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0ZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpXG5cdFx0bGV0IGF0dGFja2VkSW5kZXggPSBmaW5kQ29vcmRzSW5kZXgoZW5lbXlQbGF5ZXIuYXR0YWNrYWJsZVNwb3RzLCB5LCB4KVxuXHRcdGVuZW15UGxheWVyLmF0dGFja2FibGVTcG90cy5zcGxpY2UoYXR0YWNrZWRJbmRleCwgMSlcblxuXHRcdGlmICh0aGlzLnR1cm4gPT09IHRydWUpIHtcblx0XHRcdHRoaXMuZW5kVHVybihlbmVteVBsYXllcilcblx0XHR9XG5cdH1cblxuXHQvLyByZXR1cm5zIGluZGV4IG9mIGdpdmVuIGNvb3JkaW5hdGVzIHdpdGhpbiBnaXZlbiBhdHRhY2thYmxlU3BvdHNcblx0ZnVuY3Rpb24gZmluZENvb3Jkc0luZGV4KGFycmF5LCB5LCB4KSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycmF5W2ldWzBdID09PSB5ICYmIGFycmF5W2ldWzFdID09PSB4KSB7XG5cdFx0XHRcdHJldHVybiBpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRuYW1lLFxuXHRcdHR1cm4sXG5cdFx0YXR0YWNrYWJsZVNwb3RzLFxuXHRcdGVuZFR1cm4sXG5cdFx0c3RhcnRUdXJuLFxuXHRcdGNoZWNrSWZBdHRhY2tWYWxpZCxcblx0XHRhdHRhY2ssXG5cdH1cbn1cblxuZnVuY3Rpb24gY3B1KG5hbWUsIHR1cm4pIHtcblx0bGV0IHByb3RvdHlwZSA9IHBsYXllcihuYW1lLCB0dXJuKVxuXG5cdGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhlbmVteVBsYXllciwgZW5lbXlCb2FyZCkge1xuXHRcdC8vIGlmICh0aGlzLnR1cm4gIT09IHRydWUpIHtcblx0XHQvLyBcdHJldHVyblxuXHRcdC8vIH1cblxuXHRcdGxldCBhdHRhY2tlZEluZGV4ID0gZ2V0UmFuZG9tSW50KDAsIGVuZW15UGxheWVyLmF0dGFja2FibGVTcG90cy5sZW5ndGgpXG5cdFx0bGV0IGF0dGFja2VkQ29vcmRzID0gZW5lbXlQbGF5ZXIuYXR0YWNrYWJsZVNwb3RzW2F0dGFja2VkSW5kZXhdXG5cblx0XHRlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrZWRDb29yZHNbMF0sIGF0dGFja2VkQ29vcmRzWzFdKVxuXG5cdFx0ZW5lbXlQbGF5ZXIuYXR0YWNrYWJsZVNwb3RzLnNwbGljZShhdHRhY2tlZEluZGV4LCAxKVxuXG5cdFx0dGhpcy5lbmRUdXJuKGVuZW15UGxheWVyKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuXHR9XG5cblx0ZnVuY3Rpb24gcGxhY2VSYW5kb20oYm9hcmQpIHtcblx0XHRpZiAoIWJvYXJkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHR3aGlsZSAoYm9hcmQuc2hpcHMubGVuZ3RoIDwgNSkge1xuXHRcdFx0bGV0IHlDb29yZCA9IGdldFJhbmRvbUludCgwLCAxMClcblx0XHRcdGxldCB4Q29vcmQgPSBnZXRSYW5kb21JbnQoMCwgMTApXG5cdFx0XHRsZXQgZGlyZWN0aW9uID0gZ2V0UmFuZG9tSW50KDAsIDIpXG5cblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IDApIHtcblx0XHRcdFx0ZGlyZWN0aW9uID0gXCJoXCJcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpcmVjdGlvbiA9IFwidlwiXG5cdFx0XHR9XG5cblx0XHRcdGJvYXJkLnBsYWNlU2hpcCh5Q29vcmQsIHhDb29yZCwgZGlyZWN0aW9uKVxuXHRcdH1cblxuXHRcdC8vIHdoaWxlIChib2FyZC5zaGlwcy5sZW5ndGggPCA1KSB7XG5cdFx0Ly8gXHRib2FyZC5wbGFjZVNoaXAoeUNvb3JkLCB4Q29vcmQsIGRpcmVjdGlvbilcblx0XHQvLyB9XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IHJhbmRvbUF0dGFjaywgcGxhY2VSYW5kb20gfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwbGF5ZXIsIGNwdSB9IGZyb20gXCIuL3BsYXllci5qc1wiXG5pbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9jcmVhdGVHYW1lYm9hcmQuanNcIlxuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL2NyZWF0ZVNoaXAuanNcIlxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuZnVuY3Rpb24gY2FjaGVEb20oKSB7XG5cdGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcblx0bGV0IGJvYXJkMU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkMU1lc3NhZ2VcIilcblx0bGV0IGRpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlyZWN0aW9uQnRuXCIpXG5cdGxldCBwbGF5ZXIxRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZDFcIilcblx0bGV0IHBsYXllcjJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkMlwiKVxuXHRsZXQgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKSlcblx0bGV0IGNwdUNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdUNlbGxcIikpXG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRib2FyZDFNZXNzYWdlLFxuXHRcdGRpcmVjdGlvbkJ0bixcblx0XHRwbGF5ZXIxRG9tLFxuXHRcdHBsYXllcjJEb20sXG5cdFx0Y2VsbHMsXG5cdFx0Y3B1Q2VsbHMsXG5cdH1cbn1cbmxldCBkb20gPSBjYWNoZURvbSgpXG5cbmxldCBwbGF5ZXIxID0gcGxheWVyKFwicGxheWVyMVwiLCBmYWxzZSlcbmxldCBwbGF5ZXIxQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKVxubGV0IGNwdTEgPSBjcHUoXCJjcHVcIiwgZmFsc2UpXG5sZXQgY3B1MUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKClcbmNwdTEucGxhY2VSYW5kb20oY3B1MUJvYXJkKVxucmVuZGVyU3RhcnQoKVxuZG9tLnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHJlc2V0R2FtZSgpXG59KVxuXG5mdW5jdGlvbiByZW5kZXJTdGFydCgpIHtcblx0ZG9tLnBsYXllcjFEb20uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG5cdGRvbS5kaXJlY3Rpb25CdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG5cdGRvbS5ib2FyZDFNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXHRkb20ucGxheWVyMURvbS5pbm5lckhUTUwgPSBcIlwiXG5cdGRvbS5wbGF5ZXIyRG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuXHRkb20ucGxheWVyMkRvbS5pbm5lckhUTUwgPSBcIlwiXG5cblx0cGxheWVyMUJvYXJkLmJvYXJkLmZvckVhY2goKHJvdywgeUluZGV4KSA9PiB7XG5cdFx0cm93LmZvckVhY2goKGNlbGwsIHhJbmRleCkgPT4ge1xuXHRcdFx0bGV0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cblx0XHRcdC8vIGlmIGNvb3JkIGhhcyBhbiBhcnJheSwgdGhlcmUgaXMgYSBzaGlwIHRoZXJlXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShjZWxsKSkge1xuXHRcdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwQ2VsbFwiKVxuXHRcdFx0fVxuXG5cdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpXG5cdFx0XHRkb21DZWxsLmRhdGFzZXQuY29vcmRzID0gW3lJbmRleCwgeEluZGV4XVxuXHRcdFx0ZG9tQ2VsbC5pbm5lckhUTUwgPSBkZXRlcm1pbmVDZWxsRGlzcGxheShjZWxsKVxuXHRcdFx0ZG9tLnBsYXllcjFEb20uYXBwZW5kQ2hpbGQoZG9tQ2VsbClcblx0XHR9KVxuXHR9KVxuXG5cdGRvbSA9IGNhY2hlRG9tKClcblx0ZG9tLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcblx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJFdmVudFN0YXJ0KVxuXHR9KVxuXHRkb20uY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrRXZlbnRTdGFydClcblx0fSlcblxuXHRkb20uYm9hcmQxTWVzc2FnZS50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2VTdGFydCgpXG5cblx0Y2hlY2tJZlJlYWR5KClcbn1cblxuZG9tLmRpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9uID09PSBcImhcIikge1xuXHRcdGUudGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9uID0gXCJ2XCJcblx0XHRyZXR1cm5cblx0fSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcblx0XHRlLnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiaFwiXG5cdFx0cmV0dXJuXG5cdH1cbn0pXG5cbmZ1bmN0aW9uIGNsaWNrRXZlbnRTdGFydChlKSB7XG5cdGxldCBjb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3Jkcy5zcGxpdChcIixcIikubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKVxuXHR9KVxuXG5cdGxldCBkaXJlY3Rpb24gPSBkb20uZGlyZWN0aW9uQnRuLmRhdGFzZXQuZGlyZWN0aW9uXG5cdHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoY29vcmRzWzBdLCBjb29yZHNbMV0sIGRpcmVjdGlvbilcblx0cmVuZGVyU3RhcnQoKVxufVxuXG4vLyBob3ZlciBvbmx5IHNob3dzIGlmIHBsYWNlbWVudCBpcyB2YWxpZFxuZnVuY3Rpb24gaG92ZXJFdmVudFN0YXJ0KGUpIHtcblx0ZG9tLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcblx0XHRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRTaGlwSG92ZXJcIilcblx0fSlcblxuXHRsZXQgY29vcmRzID0gZS50YXJnZXQuZGF0YXNldC5jb29yZHMuc3BsaXQoXCIsXCIpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBwYXJzZUludChpdGVtLCAxMClcblx0fSlcblxuXHRsZXQgZGlyZWN0aW9uID0gZG9tLmRpcmVjdGlvbkJ0bi5kYXRhc2V0LmRpcmVjdGlvblxuXHRsZXQgaG92ZXJMZW5ndGggPSBnZXRIb3Zlckxlbmd0aCgpXG5cblx0aWYgKFxuXHRcdCFwbGF5ZXIxQm9hcmQuY2hlY2tQbGFjZW1lbnQoXG5cdFx0XHRjb29yZHNbMF0sXG5cdFx0XHRjb29yZHNbMV0sXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0XHRob3Zlckxlbmd0aFxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRsZXQgaW5kZXggPSBkb20uY2VsbHMuaW5kZXhPZihlLnRhcmdldClcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBob3Zlckxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcblx0XHRcdGRvbS5jZWxsc1tpbmRleCArIGldLmNsYXNzTGlzdC5hZGQoXCJhZGRTaGlwSG92ZXJcIilcblx0XHR9XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcblx0XHRcdGRvbS5jZWxsc1tpbmRleCArIDEwICogaV0uY2xhc3NMaXN0LmFkZChcImFkZFNoaXBIb3ZlclwiKVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXRIb3Zlckxlbmd0aCgpIHtcblx0aWYgKHBsYXllcjFCb2FyZC5zaGlwcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gNVxuXHR9XG5cdGlmIChwbGF5ZXIxQm9hcmQuc2hpcHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIDRcblx0fVxuXHRpZiAocGxheWVyMUJvYXJkLnNoaXBzLmxlbmd0aCA9PT0gMikge1xuXHRcdHJldHVybiAzXG5cdH1cblx0aWYgKHBsYXllcjFCb2FyZC5zaGlwcy5sZW5ndGggPT09IDMpIHtcblx0XHRyZXR1cm4gM1xuXHR9XG5cdGlmIChwbGF5ZXIxQm9hcmQuc2hpcHMubGVuZ3RoID09PSA0KSB7XG5cdFx0cmV0dXJuIDJcblx0fVxufVxuXG4vLyBjaGVjayBzaGlwIGFycmF5IGxlbmd0aCwgc2hvdyBtZXNzYWdlIHNheWluZyB3aGF0IHNoaXAgd2lsbCBiZSBhZGRlZCBuZXh0XG5mdW5jdGlvbiBnZXRNZXNzYWdlU3RhcnQoKSB7XG5cdGRvbS5ib2FyZDFNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIlxuXG5cdGlmIChwbGF5ZXIxQm9hcmQuc2hpcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIFwiUGxhY2UgeW91ciBjYXJyaWVyXCJcblx0fVxuXHRpZiAocGxheWVyMUJvYXJkLnNoaXBzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBcIlBsYWNlIHlvdXIgYmF0dGxlc2hpcFwiXG5cdH1cblx0aWYgKHBsYXllcjFCb2FyZC5zaGlwcy5sZW5ndGggPT09IDIpIHtcblx0XHRyZXR1cm4gXCJQbGFjZSB5b3VyIGNydWlzZXJcIlxuXHR9XG5cdGlmIChwbGF5ZXIxQm9hcmQuc2hpcHMubGVuZ3RoID09PSAzKSB7XG5cdFx0cmV0dXJuIFwiUGxhY2UgeW91ciBzdWJtYXJpbmVcIlxuXHR9XG5cdGlmIChwbGF5ZXIxQm9hcmQuc2hpcHMubGVuZ3RoID09PSA0KSB7XG5cdFx0cmV0dXJuIFwiUGxhY2UgeW91ciBkZXN0cm95ZXJcIlxuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcblx0aWYgKHBsYXllcjFCb2FyZC5zaGlwcy5sZW5ndGggPT09IDUpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlYWR5XCIpXG5cdFx0ZG9tLmJvYXJkMU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cdFx0ZG9tLmRpcmVjdGlvbkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblx0XHRyZW5kZXJCb2FyZHMoKVxuXHR9XG59XG5cbi8vIGl0ZXJhdGVzIHRocm91Z2ggZ2FtZWJvYXJkcywgcmVuZGVyaW5nIGJhc2VkIG9uIGVhY2ggY2VsbFxuLy8gY3B1IGJvYXJkIGlzIHRoZSBoaWRkZW5Cb2FyZCwgd2hlcmVhcyBwbGF5ZXIgY2FuIHNlZSBzaGlwcyBvbiB0aGVpciBvd24gYm9hcmRcbi8vIGdpdmVzIGVhY2ggZG9tIGNlbGwgdGhlIGNvcnJlc3BvbmRpbmcgY29vcmRpbmF0ZXNcbmZ1bmN0aW9uIHJlbmRlckJvYXJkcygpIHtcblx0ZG9tLnBsYXllcjFEb20uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG5cdGRvbS5wbGF5ZXIyRG9tLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuXHRkb20ucGxheWVyMURvbS5pbm5lckhUTUwgPSBcIlwiXG5cdGRvbS5wbGF5ZXIyRG9tLmlubmVySFRNTCA9IFwiXCJcblxuXHRwbGF5ZXIxQm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCB5SW5kZXgpID0+IHtcblx0XHRyb3cuZm9yRWFjaCgoY2VsbCwgeEluZGV4KSA9PiB7XG5cdFx0XHRsZXQgZG9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuXHRcdFx0Ly8gaWYgY29vcmQgaGFzIGFuIGFycmF5LCB0aGVyZSBpcyBhIHNoaXAgdGhlcmVcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNlbGwpKSB7XG5cdFx0XHRcdGRvbUNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBDZWxsXCIpXG5cblx0XHRcdFx0aWYgKGNlbGwuaW5jbHVkZXMoXCJoaXRcIikpIHtcblx0XHRcdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwQ2VsbFwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRvbUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIilcblx0XHRcdGRvbUNlbGwuZGF0YXNldC5jb29yZHMgPSBbeUluZGV4LCB4SW5kZXhdXG5cdFx0XHRkb21DZWxsLmlubmVySFRNTCA9IGRldGVybWluZUNlbGxEaXNwbGF5KGNlbGwpXG5cdFx0XHRkb20ucGxheWVyMURvbS5hcHBlbmRDaGlsZChkb21DZWxsKVxuXHRcdH0pXG5cdH0pXG5cdGNwdTFCb2FyZC5oaWRkZW5Cb2FyZC5mb3JFYWNoKChyb3csIHlJbmRleCkgPT4ge1xuXHRcdHJvdy5mb3JFYWNoKChjZWxsLCB4SW5kZXgpID0+IHtcblx0XHRcdGxldCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG5cdFx0XHRpZiAoY2VsbCA9PT0gXCJoaXRcIikge1xuXHRcdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwQ2VsbFwiKVxuXHRcdFx0fVxuXG5cdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpXG5cdFx0XHRkb21DZWxsLmNsYXNzTGlzdC5hZGQoXCJjcHVDZWxsXCIpXG5cdFx0XHRkb21DZWxsLmRhdGFzZXQuY29vcmRzID0gW3lJbmRleCwgeEluZGV4XVxuXHRcdFx0ZG9tQ2VsbC5pbm5lckhUTUwgPSBkZXRlcm1pbmVDZWxsRGlzcGxheShjZWxsKVxuXHRcdFx0ZG9tLnBsYXllcjJEb20uYXBwZW5kQ2hpbGQoZG9tQ2VsbClcblx0XHR9KVxuXHR9KVxuXG5cdGRvbSA9IGNhY2hlRG9tKClcblx0ZG9tLmNwdUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcblx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0V2ZW50LCB7IG9uY2U6IHRydWUgfSlcblx0fSlcbn1cblxuLy8gdXNlZCB3aGVuIHJlbmRlcmluZyBnYW1lYm9hcmRzXG5mdW5jdGlvbiBkZXRlcm1pbmVDZWxsRGlzcGxheShjZWxsKSB7XG5cdGlmIChjZWxsID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gXCImbmJzcFwiXG5cdH1cblx0aWYgKGNlbGwgPT09IFwibWlzc1wiKSB7XG5cdFx0cmV0dXJuIFwiJiMxMDA2MDtcIlxuXHR9XG5cblx0cmV0dXJuIFwiXCJcbn1cblxuLy8gZXZlbnQgYXBwbGllZCB0byBlYWNoIGNlbGwgb24gcmVuZGVyXG5mdW5jdGlvbiBjbGlja0V2ZW50KGUpIHtcblx0Ly8gdHVybiBkYXRhc2V0IGNvb3JkcyBpbnRvIGFycmF5XG5cdGxldCBjb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3Jkc1xuXHRjb29yZHMgPSBjb29yZHMuc3BsaXQoXCIsXCIpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBwYXJzZUludChpdGVtLCAxMClcblx0fSlcblxuXHRpZiAoIXBsYXllcjEuY2hlY2tJZkF0dGFja1ZhbGlkKGNwdTFCb2FyZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRwbGF5ZXIxLmF0dGFjayhjcHUxLCBjcHUxQm9hcmQsIGNvb3Jkc1swXSwgY29vcmRzWzFdKVxuXHRjcHUxLnJhbmRvbUF0dGFjayhwbGF5ZXIxLCBwbGF5ZXIxQm9hcmQpXG5cblx0cmVuZGVyQm9hcmRzKClcblxuXHRpZiAoY3B1MUJvYXJkLmFsbFN1bmsoKSkge1xuXHRcdHdpbkV2ZW50KHBsYXllcjEpXG5cdH0gZWxzZSBpZiAocGxheWVyMUJvYXJkLmFsbFN1bmsoKSkge1xuXHRcdHdpbkV2ZW50KGNwdTEpXG5cdH1cbn1cblxuZnVuY3Rpb24gd2luRXZlbnQocGxheWVyKSB7XG5cdGFsZXJ0KGAke3BsYXllci5uYW1lfSB3aW5zIWApXG5cdHJlc2V0R2FtZSgpXG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcblx0cGxheWVyMSA9IHBsYXllcihcInBsYXllcjFcIiwgZmFsc2UpXG5cdHBsYXllcjFCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpXG5cdGNwdTEgPSBjcHUoXCJjcHVcIiwgZmFsc2UpXG5cdGNwdTFCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpXG5cdGNwdTEucGxhY2VSYW5kb20oY3B1MUJvYXJkKVxuXHRyZW5kZXJTdGFydCgpXG59XG5cbi8vIGRpc3BsYXkgcGxheWVyIG5hbWVzXG4vLyBsZXQgcGxheWVyIGNoYW5nZSBuYW1lXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=