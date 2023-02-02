"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n//https://www.youtube.com/watch?v=6wk1OrGKE1w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nconst KahootPage = ()=>{\n    _s();\n    const addData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\" + 2), {\n            name: \"KOI Don Soriano\",\n            imageUrl: \"https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg\"\n        });\n    };\n    const [participants, setParticipants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\"), (snapshot)=>{\n            let data = [];\n            snapshot.forEach((snap)=>{\n                data.push(snap.val());\n            });\n            setParticipants(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        p: 8,\n        maxW: \"800px\",\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                as: \"h1\",\n                mb: 8,\n                children: \"Guillem's Quiz App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                mt: 8,\n                p: 8,\n                shadow: \"md\",\n                borderWidth: \"1px\",\n                rounded: \"lg\",\n                display: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h2\",\n                        mb: 4,\n                        children: \"Participants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                        columns: 3,\n                        columnGap: 3,\n                        rowGap: 6,\n                        w: \"full\",\n                        children: participants.map((participant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: participant.name,\n                                        src: participant.imageUrl,\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: participant.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                mt: 5,\n                                onClick: addData,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowForwardIcon, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Start quiz\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                mt: 5,\n                                children: \"Delete participants\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KahootPage, \"nHYwA4EcJLbZLF+vxFzWucL1xak=\");\n_c = KahootPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KahootPage);\nvar _c;\n$RefreshReg$(_c, \"KahootPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ3JCO0FBQ3FCO0FBV3ZCO0FBRTFCLDJGQUEyRjtBQUUzRixNQUFNZ0IsYUFBYSxJQUFNOztJQUN2QixNQUFNQyxVQUFVLElBQU07UUFDcEJaLHNEQUFHQSxDQUFDRCxzREFBR0EsQ0FBQ0QsdUNBQUVBLEVBQUMsV0FBVyxJQUFHO1lBQ3ZCZSxNQUFNO1lBQ05DLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkRDLGdEQUFTQSxDQUFDLElBQU07UUFDZEksMERBQU9BLENBQUNGLHNEQUFHQSxDQUFDRCx1Q0FBRUEsRUFBQyxXQUFXbUIsQ0FBQUEsV0FBWTtZQUNwQyxJQUFJQyxPQUFPLEVBQUU7WUFDYkQsU0FBU0UsT0FBTyxDQUFDQyxDQUFBQSxPQUFRO2dCQUN2QkYsS0FBS0csSUFBSSxDQUFDRCxLQUFLRSxHQUFHO1lBQ3BCO1lBQ0FOLGdCQUFnQkU7UUFDbEI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2hCLGlEQUFHQTtRQUFDcUIsR0FBRztRQUFHQyxNQUFLO1FBQVFDLElBQUc7OzBCQUN6Qiw4REFBQ3JCLHFEQUFPQTtnQkFBQ3NCLElBQUc7Z0JBQUtDLElBQUk7MEJBQUc7Ozs7OzswQkFHeEIsOERBQUN6QixpREFBR0E7Z0JBQ0YwQixJQUFJO2dCQUNKTCxHQUFHO2dCQUNITSxRQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxTQUFRO2dCQUNSQyxTQUFROztrQ0FFUiw4REFBQzVCLHFEQUFPQTt3QkFBQ3NCLElBQUc7d0JBQUtDLElBQUk7a0NBQUc7Ozs7OztrQ0FHeEIsOERBQUNyQix3REFBVUE7d0JBQUMyQixTQUFTO3dCQUFHQyxXQUFXO3dCQUFHQyxRQUFRO3dCQUFHQyxHQUFFO2tDQUNoRHJCLGFBQWFzQixHQUFHLENBQUMsQ0FBQ0MsYUFBYUMsc0JBQzlCLDhEQUFDaEMsc0RBQVFBO2dDQUFDaUMsU0FBUztnQ0FBR1IsU0FBUztnQ0FBZVMsWUFBWTs7a0RBQ3hELDhEQUFDakMsb0RBQU1BO3dDQUFDSyxNQUFNeUIsWUFBWXpCLElBQUk7d0NBQUU2QixLQUFLSixZQUFZeEIsUUFBUTt3Q0FBRTZCLElBQUk7Ozs7OztrREFDL0QsOERBQUN4QyxrREFBSUE7d0NBQUN5QyxVQUFTO2tEQUFNTixZQUFZekIsSUFBSTs7Ozs7OzsrQkFGa0MwQjs7Ozs7Ozs7OztrQ0FNN0UsOERBQUM3QixrREFBSUE7OzBDQUNILDhEQUFDTCxvREFBTUE7Z0NBQUN1QixJQUFJO2dDQUFHaUIsU0FBU2pDOztrREFDdEIsOERBQUNrQzs7Ozs7b0NBQWtCOzs7Ozs7OzBDQUVyQiw4REFBQ3JDLG9EQUFNQTs7Ozs7MENBQ1AsOERBQUNKLG9EQUFNQTtnQ0FBQ3VCLElBQUk7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QjtHQXZETWpCO0tBQUFBO0FBeUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2RifSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7cmVmLHNldCxvblZhbHVlfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIEJ1dHRvbixcclxuICBTaW1wbGVHcmlkLFxyXG4gIEdyaWRJdGVtLFxyXG4gIEF2YXRhcixcclxuICBTcGFjZXIsXHJcbiAgRmxleFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuLy9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTZ3azFPckdLRTF3ICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxyXG5cclxuY29uc3QgS2Fob290UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBhZGREYXRhID0gKCkgPT4ge1xyXG4gICAgc2V0KHJlZihkYiwndXNlcnMvJyArIDIpLHtcclxuICAgICAgbmFtZTogXCJLT0kgRG9uIFNvcmlhbm9cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly94c2dhbWVzLmNvL3JhbmRvbXVzZXJzL2Fzc2V0cy9hdmF0YXJzL3BpeGVsLzQxLmpwZ1wiXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3BhcnRpY2lwYW50cywgc2V0UGFydGljaXBhbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25WYWx1ZShyZWYoZGIsJ3VzZXJzLycpLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgIHNuYXBzaG90LmZvckVhY2goc25hcCA9PiB7XHJcbiAgICAgICAgZGF0YS5wdXNoKHNuYXAudmFsKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGFydGljaXBhbnRzKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwPXs4fSBtYXhXPVwiODAwcHhcIiBteD1cImF1dG9cIj5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIG1iPXs4fT5cclxuICAgICAgICBHdWlsbGVtJ3MgUXVpeiBBcHBcclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgbXQ9ezh9XHJcbiAgICAgICAgcD17OH1cclxuICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgIHJvdW5kZWQ9XCJsZ1wiXHJcbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBtYj17NH0+XHJcbiAgICAgICAgICBQYXJ0aWNpcGFudHM6XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezN9IGNvbHVtbkdhcD17M30gcm93R2FwPXs2fSB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAge3BhcnRpY2lwYW50cy5tYXAoKHBhcnRpY2lwYW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MX0gZGlzcGxheT17J2lubGluZS1mbGV4J30gYWxpZ25JdGVtcz17J2NlbnRlcid9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cGFydGljaXBhbnQubmFtZX0gc3JjPXtwYXJ0aWNpcGFudC5pbWFnZVVybH0gbXI9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiPntwYXJ0aWNpcGFudC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICA8RmxleD5cclxuICAgICAgICAgIDxCdXR0b24gbXQ9ezV9IG9uQ2xpY2s9e2FkZERhdGF9PlxyXG4gICAgICAgICAgICA8QXJyb3dGb3J3YXJkSWNvbi8+U3RhcnQgcXVpelxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIG10PXs1fT5cclxuICAgICAgICAgICAgRGVsZXRlIHBhcnRpY2lwYW50c1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWhvb3RQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGIiLCJyZWYiLCJzZXQiLCJvblZhbHVlIiwiQm94IiwiVGV4dCIsIkhlYWRpbmciLCJCdXR0b24iLCJTaW1wbGVHcmlkIiwiR3JpZEl0ZW0iLCJBdmF0YXIiLCJTcGFjZXIiLCJGbGV4IiwiS2Fob290UGFnZSIsImFkZERhdGEiLCJuYW1lIiwiaW1hZ2VVcmwiLCJwYXJ0aWNpcGFudHMiLCJzZXRQYXJ0aWNpcGFudHMiLCJzbmFwc2hvdCIsImRhdGEiLCJmb3JFYWNoIiwic25hcCIsInB1c2giLCJ2YWwiLCJwIiwibWF4VyIsIm14IiwiYXMiLCJtYiIsIm10Iiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJyb3VuZGVkIiwiZGlzcGxheSIsImNvbHVtbnMiLCJjb2x1bW5HYXAiLCJyb3dHYXAiLCJ3IiwibWFwIiwicGFydGljaXBhbnQiLCJpbmRleCIsImNvbFNwYW4iLCJhbGlnbkl0ZW1zIiwic3JjIiwibXIiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJBcnJvd0ZvcndhcmRJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});