"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBLmJNU0ypafWXu9jMhOgvXnzl49zZlGEk\",\n    authDomain: \"quiz-m8-a77e6.firebaseapp.com\",\n    databaseURL: \"https://quiz-m8-a77e6-default-rtdb.firebaseio.com\",\n    projectId: \"quiz-m8-a77e6\",\n    storageBucket: \"quiz-m8-a77e6.appspot.com\",\n    messagingSenderId: \"870992771814\",\n    appId: \"1:870992771814:web:583be2e3b7d6f99ac3d927\"\n};\nif (firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length === 0) {\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\n}\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0c7QUFFN0MsTUFBTUUsaUJBQWlCO0lBQ25CQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1g7QUFFQSxJQUFJVCx1RUFBb0IsS0FBSyxHQUFFO0lBQzNCQSx5RUFBc0IsQ0FBQ0U7QUFDM0IsQ0FBQztBQUVELE1BQU1XLEtBQUtaLDhEQUFXQTtBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLXdlYi1maXJlYmFzZS8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJ1xyXG5pbXBvcnQge2dldERhdGFiYXNlfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJMbUpOVTB5cGFmV1h1OWpNaE9ndlhuemw0OXpabEdFa1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJxdWl6LW04LWE3N2U2LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9xdWl6LW04LWE3N2U2LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInF1aXotbTgtYTc3ZTZcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicXVpei1tOC1hNzdlNi5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODcwOTkyNzcxODE0XCIsXHJcbiAgICBhcHBJZDogXCIxOjg3MDk5Mjc3MTgxNDp3ZWI6NTgzYmUyZTNiN2Q2Zjk5YWMzZDkyN1wiXHJcbn1cclxuXHJcbmlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG59XHJcblxyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKClcclxuXHJcbmV4cG9ydCB7ZGJ9Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiZ2V0RGF0YWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_2__, firebase_database__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__]);\n([_config__WEBPACK_IMPORTED_MODULE_2__, firebase_database__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst KahootPage = ()=>{\n    const addData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\" + 1), {\n            name: \"KOI Eusebio\",\n            imageUrl: \"https://xsgames.co/randomusers/assets/avatars/pixel/27.jpg\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        p: 8,\n        maxW: \"800px\",\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                as: \"h1\",\n                mb: 8,\n                children: \"Guillem Susial's Quiz App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                mt: 8,\n                p: 8,\n                shadow: \"md\",\n                borderWidth: \"1px\",\n                rounded: \"lg\",\n                display: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h2\",\n                        mb: 4,\n                        children: \"Participants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                        columns: 3,\n                        columnGap: 3,\n                        rowGap: 6,\n                        w: \"full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: \"KOI Jose antonio\",\n                                        src: \"https://xsgames.co/randomusers/assets/avatars/pixel/27.jpg\",\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: \"KOI Jose antonio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: \"KOI Don soriano\",\n                                        src: \"https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg\",\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: \"KOI Don soriano\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: \"KOI Jose antonio\",\n                                        src: \"https://xsgames.co/randomusers/assets/avatars/pixel/22.jpg\",\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: \"KOI Jose Miguel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        mt: 5,\n                        onClick: addData,\n                        children: \"Start quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guillemsusbux\\\\Desktop\\\\App Web Firebase\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KahootPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUNxQjtBQVN2QjtBQUUxQixNQUFNYSxhQUFhLElBQU07SUFDdkIsTUFBTUMsVUFBVSxJQUFNO1FBQ3BCVixzREFBR0EsQ0FBQ0Qsc0RBQUdBLENBQUNELHVDQUFFQSxFQUFDLFdBQVcsSUFBRztZQUN2QmEsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLHFCQUNFLDhEQUFDVixpREFBR0E7UUFBQ1csR0FBRztRQUFHQyxNQUFLO1FBQVFDLElBQUc7OzBCQUN6Qiw4REFBQ1gscURBQU9BO2dCQUFDWSxJQUFHO2dCQUFLQyxJQUFJOzBCQUFHOzs7Ozs7MEJBR3RCLDhEQUFDZixpREFBR0E7Z0JBQ0ZnQixJQUFJO2dCQUNKTCxHQUFHO2dCQUNITSxRQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxTQUFRO2dCQUNSQyxTQUFROztrQ0FFWiw4REFBQ2xCLHFEQUFPQTt3QkFBQ1ksSUFBRzt3QkFBS0MsSUFBSTtrQ0FBRzs7Ozs7O2tDQUd4Qiw4REFBQ1gsd0RBQVVBO3dCQUFDaUIsU0FBUzt3QkFBR0MsV0FBVzt3QkFBR0MsUUFBUTt3QkFBR0MsR0FBRTs7MENBQ2pELDhEQUFDbkIsc0RBQVFBO2dDQUFDb0IsU0FBUztnQ0FBR0wsU0FBUztnQ0FBZU0sWUFBWTs7a0RBQ3hELDhEQUFDcEIsb0RBQU1BO3dDQUFDRyxNQUFLO3dDQUFtQmtCLEtBQUk7d0NBQTZEQyxJQUFJOzs7Ozs7a0RBQ3JHLDhEQUFDM0Isa0RBQUlBO3dDQUFDNEIsVUFBUztrREFBSzs7Ozs7Ozs7Ozs7OzBDQUV0Qiw4REFBQ3hCLHNEQUFRQTtnQ0FBQ29CLFNBQVM7Z0NBQUdMLFNBQVM7Z0NBQWVNLFlBQVk7O2tEQUN4RCw4REFBQ3BCLG9EQUFNQTt3Q0FBQ0csTUFBSzt3Q0FBa0JrQixLQUFJO3dDQUE2REMsSUFBSTs7Ozs7O2tEQUNwRyw4REFBQzNCLGtEQUFJQTt3Q0FBQzRCLFVBQVM7a0RBQUs7Ozs7Ozs7Ozs7OzswQ0FFdEIsOERBQUN4QixzREFBUUE7Z0NBQUNvQixTQUFTO2dDQUFHTCxTQUFTO2dDQUFlTSxZQUFZOztrREFDeEQsOERBQUNwQixvREFBTUE7d0NBQUNHLE1BQUs7d0NBQW1Ca0IsS0FBSTt3Q0FBNkRDLElBQUk7Ozs7OztrREFDckcsOERBQUMzQixrREFBSUE7d0NBQUM0QixVQUFTO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDMUIsb0RBQU1BO3dCQUFDYSxJQUFJO3dCQUFHYyxTQUFTdEI7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QztBQUVBLGlFQUFlRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLXdlYi1maXJlYmFzZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtkYn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge3JlZixzZXQsb25WYWx1ZX0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgSGVhZGluZyxcclxuICBCdXR0b24sXHJcbiAgU2ltcGxlR3JpZCxcclxuICBHcmlkSXRlbSxcclxuICBBdmF0YXJcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IEthaG9vdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkRGF0YSA9ICgpID0+IHtcclxuICAgIHNldChyZWYoZGIsJ3VzZXJzLycgKyAxKSx7XHJcbiAgICAgIG5hbWU6IFwiS09JIEV1c2ViaW9cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly94c2dhbWVzLmNvL3JhbmRvbXVzZXJzL2Fzc2V0cy9hdmF0YXJzL3BpeGVsLzI3LmpwZ1wiXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwPXs4fSBtYXhXPVwiODAwcHhcIiBteD1cImF1dG9cIj5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIG1iPXs4fT5cclxuICAgICAgICBHdWlsbGVtIFN1c2lhbCdzIFF1aXogQXBwXHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBtdD17OH1cclxuICAgICAgICAgIHA9ezh9XHJcbiAgICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICA+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBtYj17NH0+XHJcbiAgICAgICAgUGFydGljaXBhbnRzOlxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezN9IGNvbHVtbkdhcD17M30gcm93R2FwPXs2fSB3PVwiZnVsbFwiPlxyXG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfSBkaXNwbGF5PXsnaW5saW5lLWZsZXgnfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICA8QXZhdGFyIG5hbWU9J0tPSSBKb3NlIGFudG9uaW8nIHNyYz0naHR0cHM6Ly94c2dhbWVzLmNvL3JhbmRvbXVzZXJzL2Fzc2V0cy9hdmF0YXJzL3BpeGVsLzI3LmpwZycgbXI9ezJ9Lz5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSd4bCc+S09JIEpvc2UgYW50b25pbzwvVGV4dD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfSBkaXNwbGF5PXsnaW5saW5lLWZsZXgnfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICA8QXZhdGFyIG5hbWU9J0tPSSBEb24gc29yaWFubycgc3JjPSdodHRwczovL3hzZ2FtZXMuY28vcmFuZG9tdXNlcnMvYXNzZXRzL2F2YXRhcnMvcGl4ZWwvNDEuanBnJyBtcj17Mn0vPlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9J3hsJz5LT0kgRG9uIHNvcmlhbm88L1RleHQ+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MX0gZGlzcGxheT17J2lubGluZS1mbGV4J30gYWxpZ25JdGVtcz17J2NlbnRlcid9PlxyXG4gICAgICAgICAgPEF2YXRhciBuYW1lPSdLT0kgSm9zZSBhbnRvbmlvJyBzcmM9J2h0dHBzOi8veHNnYW1lcy5jby9yYW5kb211c2Vycy9hc3NldHMvYXZhdGFycy9waXhlbC8yMi5qcGcnIG1yPXsyfS8+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT0neGwnPktPSSBKb3NlIE1pZ3VlbDwvVGV4dD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgICAgPEJ1dHRvbiBtdD17NX0gb25DbGljaz17YWRkRGF0YX0+U3RhcnQgcXVpejwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWhvb3RQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZGIiLCJyZWYiLCJzZXQiLCJvblZhbHVlIiwiQm94IiwiVGV4dCIsIkhlYWRpbmciLCJCdXR0b24iLCJTaW1wbGVHcmlkIiwiR3JpZEl0ZW0iLCJBdmF0YXIiLCJLYWhvb3RQYWdlIiwiYWRkRGF0YSIsIm5hbWUiLCJpbWFnZVVybCIsInAiLCJtYXhXIiwibXgiLCJhcyIsIm1iIiwibXQiLCJzaGFkb3ciLCJib3JkZXJXaWR0aCIsInJvdW5kZWQiLCJkaXNwbGF5IiwiY29sdW1ucyIsImNvbHVtbkdhcCIsInJvd0dhcCIsInciLCJjb2xTcGFuIiwiYWxpZ25JdGVtcyIsInNyYyIsIm1yIiwiZm9udFNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();