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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//https://www.youtube.com/watch?v=6wk1OrGKE1w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nconst KahootPage = ()=>{\n    _s();\n    const addData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\" + 5), {\n            name: \"KOI Erik\",\n            imageUrl: \"https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg\"\n        });\n    };\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)();\n    const deleteAllData = ()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users\")).then(()=>{\n            console.log(\"Success!\");\n            onClose();\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    const [participants, setParticipants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_config__WEBPACK_IMPORTED_MODULE_2__.db, \"users/\"), (snapshot)=>{\n            let data = [];\n            snapshot.forEach((snap)=>{\n                data.push(snap.val());\n            });\n            setParticipants(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        p: 8,\n        maxW: \"800px\",\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                as: \"h1\",\n                mb: 8,\n                children: \"Guillem's Quiz App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                mt: 8,\n                p: 8,\n                shadow: \"md\",\n                borderWidth: \"1px\",\n                rounded: \"lg\",\n                display: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h2\",\n                        mb: 10,\n                        children: \"Participants:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                        columns: 3,\n                        columnGap: 3,\n                        rowGap: 6,\n                        w: \"full\",\n                        children: participants.map((participant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                colSpan: 1,\n                                display: \"inline-flex\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                        name: participant.name,\n                                        src: participant.imageUrl,\n                                        mr: 2\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"xl\",\n                                        children: participant.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                colorScheme: \"green\",\n                                mt: 10,\n                                onClick: addData,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ExternalLinkIcon, {\n                                        mr: 3\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Start quiz\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                colorScheme: \"red\",\n                                mt: 10,\n                                onClick: onOpen,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteIcon, {\n                                        mr: 3\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Delete participants\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                isCentered: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {\n                                children: \"Are you sure you want to delete all data?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        onClick: onClose,\n                                        children: \"Close\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        colorScheme: \"red\",\n                                        onClick: deleteAllData,\n                                        children: \"Delete data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xxnik\\\\Documents\\\\GitHub\\\\repos\\\\WebApp-Firebase\\\\pages\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KahootPage, \"1vgDQgRk3cCbGwE5URpMxplouSQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure\n    ];\n});\n_c = KahootPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KahootPage);\nvar _c;\n$RefreshReg$(_c, \"KahootPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBDQUNiLDhEQUFDRSw4REFBZ0JBOzs7OzswQ0FDakIsOERBQUNELHlEQUFXQTs7a0RBQ1YsOERBQUNWLG9EQUFNQTt3Q0FBQzBELGFBQVk7d0NBQU9GLElBQUk7d0NBQUdHLFNBQVN0QztrREFBUzs7Ozs7O2tEQUdwRCw4REFBQ3JCLG9EQUFNQTt3Q0FBQzBELGFBQVk7d0NBQU1DLFNBQVNyQztrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlEO0dBOUVNUDs7UUFRZ0NILDJEQUFhQTs7O0tBUjdDRztBQWdGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtkYn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge3JlZixzZXQsb25WYWx1ZSwgcmVtb3ZlfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIEJ1dHRvbixcclxuICBTaW1wbGVHcmlkLFxyXG4gIEdyaWRJdGVtLFxyXG4gIEF2YXRhcixcclxuICBTcGFjZXIsXHJcbiAgRmxleCxcclxuICBNb2RhbCxcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgdXNlRGlzY2xvc3VyZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBFeHRlcm5hbExpbmtJY29uLERlbGV0ZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5cclxuLy9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTZ3azFPckdLRTF3ICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxyXG5cclxuY29uc3QgS2Fob290UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBhZGREYXRhID0gKCkgPT4ge1xyXG4gICAgc2V0KHJlZihkYiwndXNlcnMvJyArIDUpLHtcclxuICAgICAgbmFtZTogXCJLT0kgRXJpa1wiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL3hzZ2FtZXMuY28vcmFuZG9tdXNlcnMvYXNzZXRzL2F2YXRhcnMvcGl4ZWwvNDAuanBnXCJcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKClcclxuICBjb25zdCBkZWxldGVBbGxEYXRhID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlKHJlZihkYiwndXNlcnMnKSkudGhlbigoKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhXCIpXHJcbiAgICAgIG9uQ2xvc2UoKVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtwYXJ0aWNpcGFudHMsIHNldFBhcnRpY2lwYW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uVmFsdWUocmVmKGRiLCd1c2Vycy8nKSwgc25hcHNob3QgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKHNuYXAgPT4ge1xyXG4gICAgICAgIGRhdGEucHVzaChzbmFwLnZhbCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBhcnRpY2lwYW50cyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcD17OH0gbWF4Vz1cIjgwMHB4XCIgbXg9XCJhdXRvXCI+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBtYj17OH0+XHJcbiAgICAgICAgR3VpbGxlbSdzIFF1aXogQXBwXHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG10PXs4fVxyXG4gICAgICAgIHA9ezh9XHJcbiAgICAgICAgc2hhZG93PVwibWRcIlxyXG4gICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgbWI9ezEwfT5cclxuICAgICAgICAgIFBhcnRpY2lwYW50czpcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17M30gY29sdW1uR2FwPXszfSByb3dHYXA9ezZ9IHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICB7cGFydGljaXBhbnRzLm1hcCgocGFydGljaXBhbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfSBkaXNwbGF5PXsnaW5saW5lLWZsZXgnfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwYXJ0aWNpcGFudC5uYW1lfSBzcmM9e3BhcnRpY2lwYW50LmltYWdlVXJsfSBtcj17Mn0gLz5cclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCI+e3BhcnRpY2lwYW50Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT0nZ3JlZW4nIG10PXsxMH0gb25DbGljaz17YWRkRGF0YX0+XHJcbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtJY29uIG1yPXszfS8+U3RhcnQgcXVpelxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdyZWQnIG10PXsxMH0gb25DbGljaz17b25PcGVufT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gbXI9ezN9Lz5EZWxldGUgcGFydGljaXBhbnRzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IGlzQ2VudGVyZWQ+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWxIZWFkZXI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgZGF0YT88L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT0nYmx1ZScgbXI9ezN9IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdyZWQnIG9uQ2xpY2s9e2RlbGV0ZUFsbERhdGF9PkRlbGV0ZSBkYXRhPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEthaG9vdFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYiIsInJlZiIsInNldCIsIm9uVmFsdWUiLCJyZW1vdmUiLCJCb3giLCJUZXh0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlNpbXBsZUdyaWQiLCJHcmlkSXRlbSIsIkF2YXRhciIsIlNwYWNlciIsIkZsZXgiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwidXNlRGlzY2xvc3VyZSIsIkV4dGVybmFsTGlua0ljb24iLCJEZWxldGVJY29uIiwiS2Fob290UGFnZSIsImFkZERhdGEiLCJuYW1lIiwiaW1hZ2VVcmwiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiZGVsZXRlQWxsRGF0YSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInBhcnRpY2lwYW50cyIsInNldFBhcnRpY2lwYW50cyIsInNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJzbmFwIiwicHVzaCIsInZhbCIsInAiLCJtYXhXIiwibXgiLCJhcyIsIm1iIiwibXQiLCJzaGFkb3ciLCJib3JkZXJXaWR0aCIsInJvdW5kZWQiLCJkaXNwbGF5IiwiY29sdW1ucyIsImNvbHVtbkdhcCIsInJvd0dhcCIsInciLCJtYXAiLCJwYXJ0aWNpcGFudCIsImluZGV4IiwiY29sU3BhbiIsImFsaWduSXRlbXMiLCJzcmMiLCJtciIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIiwiaXNDZW50ZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});