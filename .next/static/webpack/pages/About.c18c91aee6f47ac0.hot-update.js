"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/About",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt- w-full text-center\",\n                style: {\n                    fontSize: \"50px\",\n                    fontWeight: \"bold\"\n                },\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/components/Skills.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative display-flex items-center justify-center rounded-full bg-circularLight\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    className: \"flex items-center justify-center rounded-full bg-dark p-8 shadow-dark\",\n                    style: {\n                        color: \"white\",\n                        fontWeight: \"bold\"\n                    },\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    children: \"Web\"\n                }, void 0, false, {\n                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/components/Skills.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/components/Skills.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNXO0FBRXBDLE1BQU1FLFNBQVM7SUFDYixxQkFDRTs7MEJBQ0ksOERBQUNDO2dCQUFHQyxXQUFVO2dCQUF5QkMsT0FBTztvQkFBQ0MsVUFBVTtvQkFBUUMsWUFBWTtnQkFBTTswQkFBRzs7Ozs7OzBCQUN0Riw4REFBQ0M7Z0JBQUlKLFdBQVU7MEJBQ1gsNEVBQUNILGlEQUFNQSxDQUFDTyxHQUFHO29CQUFDSixXQUFVO29CQUNsQkMsT0FBTzt3QkFBQ0ksT0FBTzt3QkFBU0YsWUFBWTtvQkFBTTtvQkFDMUNHLFlBQVk7d0JBQUNDLE9BQU87b0JBQUk7OEJBQzNCOzs7Ozs7Ozs7Ozs7O0FBTWI7S0FkTVQ7QUFnQk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzP2UxZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J210LSB3LWZ1bGwgdGV4dC1jZW50ZXInIHN0eWxlPXt7Zm9udFNpemU6ICc1MHB4JywgZm9udFdlaWdodDogJ2JvbGQnfX0+U2tpbGxzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZSBkaXNwbGF5LWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1jaXJjdWxhckxpZ2h0Jz5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWRhcmsgcC04IHNoYWRvdy1kYXJrJyBcbiAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiAnYm9sZCd9fVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tzY2FsZTogMS4wNX19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgV2ViXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlNraWxscyIsImgyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJkaXYiLCJjb2xvciIsIndoaWxlSG92ZXIiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});