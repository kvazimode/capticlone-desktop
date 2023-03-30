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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/bg-img.js":
/*!**********************************!*\
  !*** ./src/js/classes/bg-img.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BgImg {
      constructor(img, resolution) {
        this.img = img
        this.resX = resolution.x
        this.resY = resolution.y
        this.weight = 1
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, 0, 0, this.resX, this.resY)
      }
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BgImg);
    
    
    /***/ }),
    
    /***/ "./src/js/classes/highlight.js":
    /*!*************************************!*\
      !*** ./src/js/classes/highlight.js ***!
      \*************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class Highlight {
      constructor(params, resolution) {
        this.lineWidth = params.lineWidth
        this.lineColor = params.lineColor
        this.shadowColor = params.shadowColor
        this.x = params.position.x
        this.y = params.position.y
        this.w = params.w
        this.h = params.h
        this.resX = resolution.x
        this.resY = resolution.y
        this.weight = params.order + 10
        this._alpha = 0
        this.max_alpha = params.mod.max_alpha
      }
    
      draw(ctx) {
        let rect = new Path2D()
        ctx.fillStyle = this.shadowColor
        ctx.beginPath()
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.lineColor
        // inner rect
        rect.moveTo(this.x, this.y)
        rect.lineTo(this.x + this.w, this.y)
        rect.lineTo(this.x + this.w, this.y + this.h)
        rect.lineTo(this.x, this.y + this.h)
        rect.closePath()
        ctx.stroke(rect)
      }
    
      set alpha(val) {
        if (val <= this.max_alpha) {
          this._alpha = val
        }
      }
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (Highlight);
    
    
    /***/ }),
    
    /***/ "./src/js/classes/pointer.js":
    /*!***********************************!*\
      !*** ./src/js/classes/pointer.js ***!
      \***********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class Pointer {
        constructor(params) {
            this.x = params.x
            this.y = params.y
            this.img = params.img
            this.weight = 99
        }
    
        draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y)
        }
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (Pointer);
    
    
    /***/ }),
    
    /***/ "./src/js/classes/simple-text.js":
    /*!***************************************!*\
      !*** ./src/js/classes/simple-text.js ***!
      \***************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class SimpleText {
        constructor(params) {
          this.font = `${parseInt(params.fontSize)}px ${params.font}`
          this.txtFill = params.txtFill
          this.text = params.text
          this.x = params.position.x
          this.y = params.position.y
          this.weight = params.order + 10
        }
      
        draw(ctx) {
          ctx.font = this.font
          ctx.fillStyle = this.txtFill
          ctx.fillText(this.text, this.x, this.y)
        }
      
      }
    
    /* harmony default export */ __webpack_exports__["default"] = (SimpleText);
    
    
    /***/ }),
    
    /***/ "./src/js/classes/text-box.js":
    /*!************************************!*\
      !*** ./src/js/classes/text-box.js ***!
      \************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class TextBox {
      constructor(params) {
        this.fontSize = parseInt(params.fontSize)
        this.font = `${params.fontSize}px ${params.font}`
        this.bgFill = params.bgFill
        this.txtFill = params.txtFill
        this.text = params.text
        this.weight = params.order + 10
        this.position = params.position
      }
    
      draw(ctx) {
        ctx.font = this.font
        ctx.textBaseline = `bottom`
        const textSize = ctx.measureText(this.text)
        ctx.fillStyle = this.bgFill
        ctx.fillRect(this.position.x, this.position.y, textSize.width + this.fontSize, this.fontSize + this.fontSize/2)
        ctx.fillStyle = this.txtFill
        ctx.fillText(this.text, this.position.x + this.fontSize/2, this.position.y + this.fontSize + this.fontSize/3)
      }
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (TextBox);
    
    
    /***/ }),
    
    /***/ "./src/js/controls.js":
    /*!****************************!*\
      !*** ./src/js/controls.js ***!
      \****************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addControls; });
    let isPaused = true
    let reqID
    let startTime = 0
    let stopTime = 0
    let haltTime = 0
    let playTime = 0
    let fTime = 0
    let documentStamp = 0
    let lastStamp = 0
    const buttonPause = document.querySelector('.pause')
    const buttonRestart = document.querySelector('.restart')
    
    function loop(stamp, draw) {
        reqID = undefined
        documentStamp = stamp
        playTime = documentStamp - haltTime
        fTime = documentStamp - lastStamp
        draw(playTime, fTime)
        start(draw)
        lastStamp = stamp
    }
    
    function start(draw) {
        if (!reqID) {
            reqID = requestAnimationFrame((stamp) => {
                loop(stamp, draw)
            })
        }
    }
    function stop() {
        if (reqID) {
            cancelAnimationFrame(reqID)
            reqID = undefined
        }
    }
    
    function pauseHandler(draw) {
        if (!isPaused) {
            stopTime = performance.now()
            stop()
        } else {
            startTime = performance.now()
            haltTime += startTime - stopTime
            start(draw)
        }
        isPaused = !isPaused
    }
    
    function restartHandler(draw) {
        playTime = 0
        if (isPaused) {
            haltTime = performance.now()
            isPaused = !isPaused
            start(draw)
        } else {
            start(draw)
        }
    }
    
    function addControls(draw) {
        buttonPause.addEventListener('click', () => {
            pauseHandler(draw)
        })
        buttonRestart.addEventListener('click', () => {
            restartHandler(draw)
        })
    }
    
    
    /***/ }),
    
    /***/ "./src/js/data/backgrounds.js":
    /*!************************************!*\
      !*** ./src/js/data/backgrounds.js ***!
      \************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = ([/*_bg_*/]);
    
    
    /***/ }),
    
    /***/ "./src/js/data/elements.js":
    /*!*********************************!*\
      !*** ./src/js/data/elements.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = ([/*_el_*/]);
    
    
    /***/ }),
    
    /***/ "./src/js/data/pointer.js":
    /*!********************************!*\
      !*** ./src/js/data/pointer.js ***!
      \********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = ({
        src: './img/pointer.png',
        startCoord: [640, 360],
        showTime: {
            start: 0,
            end: 0
        },
        points: [
            // {
            //     start: 10000,
            //     coord: [250, 250],
            //     duration: 1000
            // },
            // {
            //     start: 12000,
            //     coord: [800, 600],
            //     duration: 1000
            // },
            // {
            //     start: 15000,
            //     coord: [300, 600],
            //     duration: 1000
            // }
        ],
        weight: 99
    });
    
    
    /***/ }),
    
    /***/ "./src/js/make-pointer.js":
    /*!********************************!*\
      !*** ./src/js/make-pointer.js ***!
      \********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/pointer.js */ "./src/js/data/pointer.js");
    /* harmony import */ var _preload_img_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload-img.js */ "./src/js/preload-img.js");
    /* harmony import */ var _classes_pointer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/pointer.js */ "./src/js/classes/pointer.js");
    
    
    
    const pointerImg = Object(_preload_img_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"])
    let currentX = _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"].startCoord[0]
    let currentY = _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"].startCoord[1]
    
    let newX = currentX
    let newY = currentY
    function makePointer(stamp, fTime) {
        let obj = {}
        if (stamp <= _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"].showTime.start || stamp > _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"].showTime.end) {
            obj.draw = () => {
                return
            }
            return obj
        }
        
        let executed = false
        _data_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"].points.forEach((el) => {
            if (stamp >= el.start && stamp < (el.start + el.duration)) {
                let deltaX = el.coord[0] - currentX
                let deltaY = el.coord[1] - currentY
                let stepX = deltaX / (el.duration / fTime)
                let stepY = deltaY / (el.duration / fTime)
                newX += stepX
                newY += stepY
                executed = true
            }
        })
        if (!executed) {
            currentX = newX
            currentY = newY
        }
        
        obj = new _classes_pointer_js__WEBPACK_IMPORTED_MODULE_2__["default"]({img: pointerImg, x: newX, y: newY})
        return obj
    
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (makePointer);
    
    
    /***/ }),
    
    /***/ "./src/js/preload-img.js":
    /*!*******************************!*\
      !*** ./src/js/preload-img.js ***!
      \*******************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    let preload = (data) => {
      if (Array.isArray(data)) {
        let loaded = new Array()
        for (let i=0; i < data.length; i++) {
          loaded[i] = new Image()
          loaded[i].src = data[i].link
          loaded[i].start = data[i].start
          loaded[i].end = data[i].end
        }
        return loaded
      }
      let loaded = new Image()
      loaded.src = data.src
      return loaded
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (preload);
    
    
    /***/ }),
    
    /***/ "./src/js/script.js":
    /*!**************************!*\
      !*** ./src/js/script.js ***!
      \**************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _data_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/elements.js */ "./src/js/data/elements.js");
    /* harmony import */ var _data_backgrounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/backgrounds.js */ "./src/js/data/backgrounds.js");
    /* harmony import */ var _classes_text_box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/text-box.js */ "./src/js/classes/text-box.js");
    /* harmony import */ var _classes_simple_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/simple-text.js */ "./src/js/classes/simple-text.js");
    /* harmony import */ var _classes_bg_img_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/bg-img.js */ "./src/js/classes/bg-img.js");
    /* harmony import */ var _classes_highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/highlight.js */ "./src/js/classes/highlight.js");
    /* harmony import */ var _preload_img_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preload-img.js */ "./src/js/preload-img.js");
    /* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls.js */ "./src/js/controls.js");
    /* harmony import */ var _make_pointer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./make-pointer.js */ "./src/js/make-pointer.js");
    
    
    
    
    
    
    
    
    
    const RESOLUTION = {
        x: 1280,
        y: 720
    }
    let canvas = document.querySelector(`#canvas`)
    let ctx = canvas.getContext(`2d`)
    canvas.width = RESOLUTION.x
    canvas.height = RESOLUTION.y
    
    // preload bgImages
    let bgImages = Object(_preload_img_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_data_backgrounds_js__WEBPACK_IMPORTED_MODULE_1__["default"])
    
    let makeObject = (item, stamp, fTime) => {
        let obj = {}
        switch(item.type) {
            case `TextBox`:
                obj = new _classes_text_box_js__WEBPACK_IMPORTED_MODULE_2__["default"](item);
                break;
            case `SimpleText`:
                obj = new _classes_simple_text_js__WEBPACK_IMPORTED_MODULE_3__["default"](item);
                break;
            case `Highlight`:
                obj = new _classes_highlight_js__WEBPACK_IMPORTED_MODULE_5__["default"](item, RESOLUTION);
                if (item.hasOwnProperty(`mod`)){
                    let aniEnd = item.start + item.mod.duration
                    let endAniStart = item.end - item.mod.duration
                    let step = item.mod.max_alpha / (item.mod.duration / fTime)
                    if (stamp >= item.start && stamp <= aniEnd) {
                        let alpha = ((stamp - item.start) / fTime) * step
                        obj.alpha = alpha
                    } else if (stamp > aniEnd && stamp < endAniStart) {
                        obj.alpha = item.mod.max_alpha
                    } else if (stamp >= endAniStart && stamp <= item.end) {
                        let alpha = ((item.end - stamp) / fTime) * step
                        obj.alpha = alpha
                    }
                }
                break;
        }
        return obj
    }
    
    let composer = (stamp, fTime) => {
        let stack = []
        _data_elements_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(item => {
            if (item.start <= stamp && item.end > stamp) {
                stack.push(makeObject(item, stamp, fTime))
            }
        })
        bgImages.forEach(el => {
            if (el.start <= stamp && el.end > stamp) {
                stack.push(new _classes_bg_img_js__WEBPACK_IMPORTED_MODULE_4__["default"](el, RESOLUTION))
            }
        })
        stack.push(Object(_make_pointer_js__WEBPACK_IMPORTED_MODULE_8__["default"])(stamp, fTime))
        stack.sort((a, b) => a.weight - b.weight)
        return stack
    }
    
    function draw(playTime, fTime) {
        ctx.clearRect(0, 0, RESOLUTION.x, RESOLUTION.y)
        let stack = composer(playTime, fTime)
        stack.forEach(el => {
            el.draw(ctx)
        })
    }
    
    Object(_controls_js__WEBPACK_IMPORTED_MODULE_7__["default"])(draw)
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=bundle.js.map