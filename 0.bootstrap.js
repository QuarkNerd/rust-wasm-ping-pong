(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rust_wasm_ping_pong.js":
/*!*************************************!*\
  !*** ../pkg/rust_wasm_ping_pong.js ***!
  \*************************************/
/*! exports provided: GameState, Universe, __wbg_random_a3b3bcffa2ed629c, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_ping_pong_bg.wasm */ \"../pkg/rust_wasm_ping_pong_bg.wasm\");\n/* harmony import */ var _rust_wasm_ping_pong_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rust_wasm_ping_pong_bg.js */ \"../pkg/rust_wasm_ping_pong_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameState\", function() { return _rust_wasm_ping_pong_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"GameState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _rust_wasm_ping_pong_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a3b3bcffa2ed629c\", function() { return _rust_wasm_ping_pong_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_a3b3bcffa2ed629c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _rust_wasm_ping_pong_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/rust_wasm_ping_pong.js?");

/***/ }),

/***/ "../pkg/rust_wasm_ping_pong_bg.js":
/*!****************************************!*\
  !*** ../pkg/rust_wasm_ping_pong_bg.js ***!
  \****************************************/
/*! exports provided: GameState, Universe, __wbg_random_a3b3bcffa2ed629c, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameState\", function() { return GameState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a3b3bcffa2ed629c\", function() { return __wbg_random_a3b3bcffa2ed629c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_ping_pong_bg.wasm */ \"../pkg/rust_wasm_ping_pong_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst GameState = Object.freeze({ InProgress:0,\"0\":\"InProgress\",GameOver:1,\"1\":\"GameOver\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} height\n    * @param {number} width\n    * @param {number} paddle_height\n    * @param {number} paddle_width\n    * @param {number} paddle_x_offset\n    * @param {number} ball_size\n    * @param {number} paddle_vel\n    * @param {number} ball_x_vel\n    * @param {number} ball_max_y_vel\n    * @param {number} max_score\n    * @returns {Universe}\n    */\n    static new(height, width, paddle_height, paddle_width, paddle_x_offset, ball_size, paddle_vel, ball_x_vel, ball_max_y_vel, max_score) {\n        var ret = _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](height, width, paddle_height, paddle_width, paddle_x_offset, ball_size, paddle_vel, ball_x_vel, ball_max_y_vel, max_score);\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    ball_pos() {\n        var ret = _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_ball_pos\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    paddles_y_pos() {\n        var ret = _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_paddles_y_pos\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    score() {\n        var ret = _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_score\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    game_state() {\n        var ret = _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_game_state\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {string} a\n    */\n    key_pressed(a) {\n        var ptr0 = passStringToWasm0(a, _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _rust_wasm_ping_pong_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_key_pressed\"](this.ptr, ptr0, len0);\n    }\n}\n\nconst __wbg_random_a3b3bcffa2ed629c = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/rust_wasm_ping_pong_bg.js?");

/***/ }),

/***/ "../pkg/rust_wasm_ping_pong_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/rust_wasm_ping_pong_bg.wasm ***!
  \******************************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_tick, universe_ball_pos, universe_paddles_y_pos, universe_score, universe_game_state, universe_key_pressed, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_wasm_ping_pong_bg.js */ \"../pkg/rust_wasm_ping_pong_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rust_wasm_ping_pong_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rust_wasm_ping_pong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rust-wasm-ping-pong */ \"../pkg/rust_wasm_ping_pong.js\");\n/* harmony import */ var rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rust-wasm-ping-pong/rust_wasm_ping_pong_bg */ \"../pkg/rust_wasm_ping_pong_bg.wasm\");\n\r\n\r\n\r\nconst BOARD_COLOUR = \"#000000\";\r\nconst STUFF_COLOUR = \"#FFFFFF\";\r\nconst HEIGHT = 600;\r\nconst WIDTH = 800;\r\n\r\nconst MAX_SCORE = 5;\r\nconst PADDLE_HEIGHT = 100;\r\nconst PADDLE_WIDTH = 5;\r\nconst PADDLE_OFFSET = 20;\r\nconst PADDLE_VELOCITY = 15;\r\nconst BALL_SIZE = 5;\r\nconst BALL_X_VELOCITY = 2;\r\nconst BALL_MAX_Y_VELOCITY = 6;\r\nconst pre = document.getElementById(\"score\")\r\nconst canvas = document.getElementById(\"board\");\r\nconst ctx = canvas.getContext('2d');\r\ncanvas.height = HEIGHT;\r\ncanvas.width = WIDTH;\r\n\r\nlet universe = rust_wasm_ping_pong__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(HEIGHT, WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_OFFSET, BALL_SIZE, PADDLE_VELOCITY, BALL_X_VELOCITY, BALL_MAX_Y_VELOCITY, MAX_SCORE);\r\nlet ballPositionPtr = universe.ball_pos();\r\nlet paddlesPositionPtr = universe.paddles_y_pos();\r\nlet scorePositionPtr = universe.score();\r\nlet gameStatePtr = universe.game_state();\r\nlet ballPositionArray = new Float64Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, ballPositionPtr, 2);\r\nlet paddlesPositionArray = new Float64Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, paddlesPositionPtr, 2);\r\nlet scoreArray = new Uint8Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, scorePositionPtr, 2);\r\nlet gameState = new Uint8Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, gameStatePtr, 1);\r\n\r\n\r\nconst tick = () => {\r\n    universe.tick();\r\n    drawBoard();\r\n    drawScore();\r\n    requestAnimationFrame(tick);\r\n} \r\n\r\nrequestAnimationFrame(tick);\r\n\r\nconst drawScore = () => {\r\n    pre.textContent = `${gameState[0] ? \"Game Over\" : \"Game In Progress\"} \\n ${scoreArray[0]} : ${scoreArray[1]}`;\r\n}\r\n\r\nconst drawBoard = () => {\r\n    ctx.beginPath();\r\n    ctx.fillStyle = BOARD_COLOUR;\r\n    ctx.fillRect(\r\n        0,\r\n        0,\r\n        WIDTH,\r\n        HEIGHT\r\n        );\r\n    ctx.fillStyle = STUFF_COLOUR;\r\n    ctx.fillRect(\r\n        ballPositionArray[1] - BALL_SIZE/2,\r\n        ballPositionArray[0] - BALL_SIZE/2,\r\n        BALL_SIZE,\r\n        BALL_SIZE\r\n    );\r\n    ctx.fillRect(\r\n        PADDLE_OFFSET,\r\n        paddlesPositionArray[0] - PADDLE_HEIGHT/2,\r\n        PADDLE_WIDTH,\r\n        PADDLE_HEIGHT\r\n    );\r\n    ctx.fillRect(\r\n        WIDTH - PADDLE_OFFSET - PADDLE_WIDTH,\r\n        paddlesPositionArray[1] - PADDLE_HEIGHT/2,\r\n        PADDLE_WIDTH,\r\n        PADDLE_HEIGHT\r\n    );\r\n    ctx.stroke();\r\n}\r\n\r\ndocument.getElementById(\"restart\").addEventListener(\"click\", () => {\r\n    universe = rust_wasm_ping_pong__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(HEIGHT, WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_OFFSET, BALL_SIZE, PADDLE_VELOCITY, BALL_X_VELOCITY, BALL_MAX_Y_VELOCITY, MAX_SCORE);\r\n    ballPositionPtr = universe.ball_pos();\r\n    paddlesPositionPtr = universe.paddles_y_pos();\r\n    scorePositionPtr = universe.score();\r\n    gameStatePtr = universe.game_state();\r\n    ballPositionArray = new Float64Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, ballPositionPtr, 2);\r\n    paddlesPositionArray = new Float64Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, paddlesPositionPtr, 2);\r\n    scoreArray = new Uint8Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, scorePositionPtr, 2);\r\n    gameState = new Uint8Array(rust_wasm_ping_pong_rust_wasm_ping_pong_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, gameStatePtr, 1); \r\n});\r\n\r\ndocument.addEventListener(\"keydown\", event => {\r\n    universe.key_pressed(event.key);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);