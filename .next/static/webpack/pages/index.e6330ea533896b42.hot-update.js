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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//https://www.youtube.com/watch?v=6wk1OrGKE1w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nconst KahootPage = ()=>{\n    _s();\n    const addData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\" + 2), {\n            name: \"KOI Don Soriano\",\n            imageUrl: \"https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg\"\n        });\n    };\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)();\n    const deleteAllData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users\")).then(()=>{\n            console.log(\"Success!\");\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    const [participants, setParticipants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\"), (snapshot)=>{\n            let data = [];\n            snapshot.forEach((snap)=>{\n                data.push(snap.val());\n            });\n            setParticipants(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        p: 8,\n        maxW: \"800px\",\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                as: \"h1\",\n                mb: 8,\n                children: \"Guillem's Quiz App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                mt: 8,\n                p: 8,\n                shadow: \"md\",\n                borderWidth: \"1px\",\n                rounded: \"lg\",\n                display: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h2\",\n                        mb: 10,\n                        children: \"Participants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                        columns: 3,\n                        columnGap: 3,\n                        rowGap: 6,\n                        w: \"full\",\n                        children: participants.map((participant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: participant.name,\n                                        src: participant.imageUrl,\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: participant.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                colorScheme: \"green\",\n                                mt: 10,\n                                onClick: addData,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ExternalLinkIcon, {\n                                        mr: 3\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Start quiz\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                colorScheme: \"red\",\n                                mt: 10,\n                                onClick: onOpen,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteIcon, {\n                                        mr: 3\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Delete participants\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {\n                                children: \"Are you sure you want to delete all data?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        onClick: onClose,\n                                        children: \"Close\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        variant: \"ghost\",\n                                        onClick: deleteAllData,\n                                        children: \"Delete data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KahootPage, \"1vgDQgRk3cCbGwE5URpMxplouSQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure\n    ];\n});\n_c = KahootPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KahootPage);\nvar _c;\n$RefreshReg$(_c, \"KahootPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCQTs7Ozs7MENBQ2pCLDhEQUFDRCx5REFBV0E7O2tEQUNWLDhEQUFDVixvREFBTUE7d0NBQUMwRCxhQUFZO3dDQUFPRixJQUFJO3dDQUFHRyxTQUFTdEM7a0RBQVM7Ozs7OztrREFHcEQsOERBQUNyQixvREFBTUE7d0NBQUM0RCxTQUFRO3dDQUFRRCxTQUFTckM7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQTdFTVA7O1FBUWdDSCwyREFBYUE7OztLQVI3Q0c7QUErRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZGJ9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHtyZWYsc2V0LG9uVmFsdWUsIHJlbW92ZX0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgSGVhZGluZyxcclxuICBCdXR0b24sXHJcbiAgU2ltcGxlR3JpZCxcclxuICBHcmlkSXRlbSxcclxuICBBdmF0YXIsXHJcbiAgU3BhY2VyLFxyXG4gIEZsZXgsXHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxPdmVybGF5LFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIHVzZURpc2Nsb3N1cmVcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rSWNvbixEZWxldGVJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbi8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj02d2sxT3JHS0UxdyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuXHJcbmNvbnN0IEthaG9vdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkRGF0YSA9ICgpID0+IHtcclxuICAgIHNldChyZWYoZGIsJ3VzZXJzLycgKyAyKSx7XHJcbiAgICAgIG5hbWU6IFwiS09JIERvbiBTb3JpYW5vXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8veHNnYW1lcy5jby9yYW5kb211c2Vycy9hc3NldHMvYXZhdGFycy9waXhlbC80MS5qcGdcIlxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKVxyXG4gIGNvbnN0IGRlbGV0ZUFsbERhdGEgPSAoKSA9PiB7XHJcbiAgICByZW1vdmUocmVmKGRiLCd1c2VycycpKS50aGVuKCgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyFcIilcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBbcGFydGljaXBhbnRzLCBzZXRQYXJ0aWNpcGFudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvblZhbHVlKHJlZihkYiwndXNlcnMvJyksIHNuYXBzaG90ID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgc25hcHNob3QuZm9yRWFjaChzbmFwID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goc25hcC52YWwoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQYXJ0aWNpcGFudHMoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHA9ezh9IG1heFc9XCI4MDBweFwiIG14PVwiYXV0b1wiPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgxXCIgbWI9ezh9PlxyXG4gICAgICAgIEd1aWxsZW0ncyBRdWl6IEFwcFxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBtdD17OH1cclxuICAgICAgICBwPXs4fVxyXG4gICAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIG1iPXsxMH0+XHJcbiAgICAgICAgICBQYXJ0aWNpcGFudHM6XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezN9IGNvbHVtbkdhcD17M30gcm93R2FwPXs2fSB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAge3BhcnRpY2lwYW50cy5tYXAoKHBhcnRpY2lwYW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MX0gZGlzcGxheT17J2lubGluZS1mbGV4J30gYWxpZ25JdGVtcz17J2NlbnRlcid9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cGFydGljaXBhbnQubmFtZX0gc3JjPXtwYXJ0aWNpcGFudC5pbWFnZVVybH0gbXI9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiPntwYXJ0aWNpcGFudC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICA8RmxleD5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9J2dyZWVuJyBtdD17MTB9IG9uQ2xpY2s9e2FkZERhdGF9PlxyXG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rSWNvbiBtcj17M30vPlN0YXJ0IHF1aXpcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT0ncmVkJyBtdD17MTB9IG9uQ2xpY2s9e29uT3Blbn0+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIG1yPXszfS8+RGVsZXRlIHBhcnRpY2lwYW50c1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XHJcbiAgICAgICAgPE1vZGFsQ29udGVudD5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBkYXRhPzwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJyBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nZ2hvc3QnIG9uQ2xpY2s9e2RlbGV0ZUFsbERhdGF9PkRlbGV0ZSBkYXRhPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEthaG9vdFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYiIsInJlZiIsInNldCIsIm9uVmFsdWUiLCJyZW1vdmUiLCJCb3giLCJUZXh0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlNpbXBsZUdyaWQiLCJHcmlkSXRlbSIsIkF2YXRhciIsIlNwYWNlciIsIkZsZXgiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwidXNlRGlzY2xvc3VyZSIsIkV4dGVybmFsTGlua0ljb24iLCJEZWxldGVJY29uIiwiS2Fob290UGFnZSIsImFkZERhdGEiLCJuYW1lIiwiaW1hZ2VVcmwiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiZGVsZXRlQWxsRGF0YSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInBhcnRpY2lwYW50cyIsInNldFBhcnRpY2lwYW50cyIsInNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJzbmFwIiwicHVzaCIsInZhbCIsInAiLCJtYXhXIiwibXgiLCJhcyIsIm1iIiwibXQiLCJzaGFkb3ciLCJib3JkZXJXaWR0aCIsInJvdW5kZWQiLCJkaXNwbGF5IiwiY29sdW1ucyIsImNvbHVtbkdhcCIsInJvd0dhcCIsInciLCJtYXAiLCJwYXJ0aWNpcGFudCIsImluZGV4IiwiY29sU3BhbiIsImFsaWduSXRlbXMiLCJzcmMiLCJtciIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});