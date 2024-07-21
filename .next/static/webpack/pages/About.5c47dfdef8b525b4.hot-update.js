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

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_images_profile_comic_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/comic-pic.png */ \"./public/images/profile/comic-pic.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        motionValue,\n        value,\n        isInView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n        lineNumber: 29,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst About = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Farhan | About Page \"\n                    }, void 0, false, {\n                        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        description: \"any\"\n                    }, void 0, false, {\n                        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center self-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_2__.AnimatedText, {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\",\n                            fontSize: \"60px\",\n                            textAlign: \"center\"\n                        }, void 0, false, {\n                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4\",\n                                            style: {\n                                                fontWeight: \"bold\",\n                                                opacity: \"70%\"\n                                            },\n                                            children: \"BIOGRAPHY\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\",\n                                            style: {\n                                                font: \"medium\"\n                                            },\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4\",\n                                            style: {\n                                                font: \"medium\"\n                                            },\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\",\n                                            style: {\n                                                font: \"medium\"\n                                            },\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 z-[-10] w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_comic_pic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"items-end flex flex-col justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block\",\n                                                    style: {\n                                                        fontWeight: \"bold\",\n                                                        fontSize: \"50px\"\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                        value: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: \"Satisfied Clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 29\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"items-end flex flex-col justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block\",\n                                                    style: {\n                                                        fontWeight: \"bold\",\n                                                        fontSize: \"50px\"\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                        value: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: \"Projects Completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 29\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"items-end flex flex-col justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block\",\n                                                    style: {\n                                                        fontWeight: \"bold\",\n                                                        fontSize: \"50px\"\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                        value: 2\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: \"years  experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 29\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/farhan/Desktop/ECA/portfolio_website/src/pages/About.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n$RefreshReg$(_c1, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1A7b0RBQUtPLFdBQVU7b0RBQWVNLE9BQU87d0RBQUNDLFlBQVk7d0RBQVFMLFVBQVM7b0RBQU07OERBQ3RFLDRFQUFDdEI7d0RBQWdCQyxPQUFPOzs7Ozs7Ozs7Ozs4REFFNUIsOERBQUN3Qjs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQztNQWxFTVg7QUFvRU4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Fib3V0LmpzP2FjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQW5pbWF0ZWRUZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwcm9maWxlUGljIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcHJvZmlsZS9jb21pYy1waWMucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VJblZpZXcsIHVzZU1vdGlvblZhbHVlLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBBbmltYXRlZE51bWJlcnMgPSAoe3ZhbHVlfSkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7ZHVyYXRpb246IDMwMDB9KVxuICAgIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNJblZpZXcpIHtcbiAgICAgICAgICAgIG1vdGlvblZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbbW90aW9uVmFsdWUsIHZhbHVlLCBpc0luVmlld10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzcHJpbmdWYWx1ZS5vbihcImNoYW5nZVwiLCAobGF0ZXN0KSA9PiB7XG4gICAgICAgICAgICBpZihyZWYuY3VycmVudCAmJiBsYXRlc3QudG9GaXhlZCgwKSA8PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBsYXRlc3QudG9GaXhlZCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbc3ByaW5nVmFsdWUsIHZhbHVlXSlcblxuICAgIHJldHVybiA8c3BhbiByZWY9e3JlZn0+PC9zcGFuPlxuXG59XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPiBGYXJoYW4gfCBBYm91dCBQYWdlIDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgZGVzY3JpcHRpb249J2FueSc+PC9tZXRhPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNlbGYtY2VudGVyJz5cbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPSdwdC0xNic+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlXCIgY2xhc3NOYW1lPSdtYi0xNicgZm9udFNpemU9JzYwcHgnIHRleHRBbGlnbj0nY2VudGVyJy8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTggZ2FwLTE2Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTQnIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBvcGFjaXR5Oic3MCUnfX0+QklPR1JBUEhZPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3tmb250OiAnbWVkaXVtJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpLCBJJ20gQ29kZUJ1Y2tzLCBhIHdlYiBkZXZlbG9wZXIgYW5kIFVJL1VYIGRlc2lnbmVyIHdpdGggYSBwYXNzaW9uIGZvciBjcmVhdGluZyBiZWF1dGlmdWwsIGZ1bmN0aW9uYWwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB1c2VyLWNlbnRlcmVkIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIFdpdGggNCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gSSBhbSBhbHdheXMgbG9va2luZyBmb3IgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGFuZCBpbm5vdmF0aXZlIHdheXMgdG8gYnJpbmcgbXkgY2xpZW50cycgdmlzaW9ucyB0byBsaWZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J215LTQnIHN0eWxlPXt7Zm9udDogJ21lZGl1bSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGJlbGlldmUgdGhhdCBkZXNpZ24gaXMgYWJvdXQgbW9yZSB0aGFuIGp1c3QgbWFraW5nIHRoaW5ncyBsb29rIHByZXR0eSDigJMgaXQncyBhYm91dCBzb2x2aW5nIHByb2JsZW1zIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGluZyBpbnR1aXRpdmUsIGVuam95YWJsZSBleHBlcmllbmNlcyBmb3IgdXNlcnMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9Jycgc3R5bGU9e3tmb250OiAnbWVkaXVtJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgSSdtIHdvcmtpbmcgb24gYSB3ZWJzaXRlLCBtb2JpbGUgYXBwLCBvciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlciBkaWdpdGFsIHByb2R1Y3QsIEkgYnJpbmcgbXkgY29tbWl0bWVudCB0byBkZXNpZ24gZXhjZWxsZW5jZSBhbmQgdXNlci1jZW50ZXJlZCB0aGlua2luZyB0byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVyeSBwcm9qZWN0IEkgd29yayBvbi4gSSBsb29rIGZvcndhcmQgdG8gdGhlIG9wcG9ydHVuaXR5IHRvIGJyaW5nIG15IHNraWxscyBhbmQgcGFzc2lvbiB0byB5b3VyIG5leHQgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgcmVsYXRpdmUgaC1tYXggcm91bmRlZC0yeGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIHAtOCBiZy1saWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgLXJpZ2h0LTMgei1bLTEwXSB3LVsxMDIlXSBoLVsxMDMlXSByb3VuZGVkLVsycmVtXSBiZy1kYXJrJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSBjbGFzc05hbWU9ICd3LWZ1bGwgaC1hdXRvIHJvdW5kZWQtMnhsJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1zLWVuZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTonNTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVycyB2YWx1ZT17MTB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TYXRpc2ZpZWQgQ2xpZW50czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbXMtZW5kIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6JzUwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHMgQ29tcGxldGVkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbXMtZW5kIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6JzUwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj55ZWFycyAgZXhwZXJpZW5jZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sIm5hbWVzIjpbIkhlYWQiLCJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInByb2ZpbGVQaWMiLCJJbWFnZSIsInVzZUluVmlldyIsInVzZU1vdGlvblZhbHVlIiwidXNlU3ByaW5nIiwiQW5pbWF0ZWROdW1iZXJzIiwidmFsdWUiLCJyZWYiLCJtb3Rpb25WYWx1ZSIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsInNldCIsIm9uIiwibGF0ZXN0IiwiY3VycmVudCIsInRvRml4ZWQiLCJ0ZXh0Q29udGVudCIsInNwYW4iLCJBYm91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJkaXYiLCJoMiIsInN0eWxlIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiLCJwIiwiZm9udCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/About.js\n"));

/***/ })

});