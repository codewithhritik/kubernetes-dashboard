"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/16/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/16/solid/esm/ChevronDoubleLeftIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Sidebar(param) {\n    let {} = param;\n    _s();\n    const [toggleCollapse, setToggleCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"h-screen px-4 pt-8 pb-4 bg-light justify-between flex-col\", {\n        [\"w-80\"]: !toggleCollapse,\n        [\"w-20\"]: toggleCollapse\n    });\n    // const collapseIconClasses = classNames(\n    //     \"p-4 rounded absolute right-0 text-black\",\n    //     {\n    //         \"rotate-180\": toggleCollapse,\n    //     }\n    // );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: wrapperClasses,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center pl-1 gap-4\",\n                            children: \"k3s Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-4 rounded absolute right-0 text-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"t+8wr8nTosJHDTQUfU40FbrxJjc=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0c7QUFDOEI7QUFFbkQsU0FBU0csUUFBUSxLQUFFO1FBQUYsRUFBRSxHQUFGOztJQUM1QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1NLGlCQUFpQkwsaURBQVVBLENBQzdCLDZEQUNBO1FBQ0ksQ0FBQyxPQUFPLEVBQUUsQ0FBQ0c7UUFDWCxDQUFDLE9BQU8sRUFBRUE7SUFDZDtJQUdKLDBDQUEwQztJQUMxQyxpREFBaUQ7SUFDakQsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxRQUFRO0lBQ1IsS0FBSztJQUVMLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFXRjs7MEJBQ1osOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUErQjs7Ozs7O3NDQUc5Qyw4REFBQ0M7NEJBQU9ELFdBQVU7c0NBQ2QsNEVBQUNOLGlFQUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUNLOzs7Ozs7Ozs7OztBQUdiO0dBakN3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzeD80Y2I0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IENoZXZyb25Eb3VibGVMZWZ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzE2L3NvbGlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoe30pIHtcbiAgICBjb25zdCBbdG9nZ2xlQ29sbGFwc2UsIHNldFRvZ2dsZUNvbGxhcHNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHdyYXBwZXJDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgXCJoLXNjcmVlbiBweC00IHB0LTggcGItNCBiZy1saWdodCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2xcIixcbiAgICAgICAge1xuICAgICAgICAgICAgW1widy04MFwiXTogIXRvZ2dsZUNvbGxhcHNlLFxuICAgICAgICAgICAgW1widy0yMFwiXTogdG9nZ2xlQ29sbGFwc2UsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gY29uc3QgY29sbGFwc2VJY29uQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgLy8gICAgIFwicC00IHJvdW5kZWQgYWJzb2x1dGUgcmlnaHQtMCB0ZXh0LWJsYWNrXCIsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIFwicm90YXRlLTE4MFwiOiB0b2dnbGVDb2xsYXBzZSxcbiAgICAvLyAgICAgfVxuICAgIC8vICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzZXN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC0xIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBrM3MgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkIGFic29sdXRlIHJpZ2h0LTAgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3VibGVMZWZ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJDaGV2cm9uRG91YmxlTGVmdEljb24iLCJTaWRlYmFyIiwidG9nZ2xlQ29sbGFwc2UiLCJzZXRUb2dnbGVDb2xsYXBzZSIsIndyYXBwZXJDbGFzc2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.jsx\n"));

/***/ })

});