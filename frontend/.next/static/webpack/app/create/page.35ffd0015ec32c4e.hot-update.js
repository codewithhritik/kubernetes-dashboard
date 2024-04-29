"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./app/create/page.jsx":
/*!*****************************!*\
  !*** ./app/create/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/page */ \"(app-pages-browser)/./app/dashboard/page.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CreatePod = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        dockerhubImage: \"\",\n        appName: \"\",\n        numberOfReplicas: \"\",\n        triggerCommand: \"\"\n    });\n    const inputStyleClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6 p-2\");\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form Data Submitted: \", formData);\n    // Here you would typically handle the API call to create a pod\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dashboard_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-start pt-20 min-h-screen bg-gray-100\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl w-full px-4 sm:px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-gray-700 mb-4\",\n                        children: \"Create a Pod\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"space-y-6 bg-white p-8 shadow-lg rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"dockerhubImage\",\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Dockerhub Image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"dockerhubImage\",\n                                        id: \"dockerhubImage\",\n                                        required: true,\n                                        className: inputStyleClasses,\n                                        value: formData.dockerhubImage,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"appName\",\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"App Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"appName\",\n                                        id: \"appName\",\n                                        required: true,\n                                        className: inputStyleClasses,\n                                        value: formData.appName,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"numberOfReplicas\",\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Number of Replicas\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"numberOfReplicas\",\n                                        id: \"numberOfReplicas\",\n                                        required: true,\n                                        className: inputStyleClasses,\n                                        value: formData.numberOfReplicas,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"triggerCommand\",\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Trigger Command\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"triggerCommand\",\n                                        id: \"triggerCommand\",\n                                        required: true,\n                                        className: inputStyleClasses,\n                                        value: formData.triggerCommand,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                    children: \"Create Pod\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreatePod, \"sI8jgMhLQTjZN2XNEXeF+n8L/lo=\");\n_c = CreatePod;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePod);\nvar _c;\n$RefreshReg$(_c, \"CreatePod\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ0U7QUFDTjtBQUVwQyxNQUFNSSxZQUFZOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNyQ00sZ0JBQWdCO1FBQ2hCQyxTQUFTO1FBQ1RDLGtCQUFrQjtRQUNsQkMsZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTUMsb0JBQW9CUixpREFBVUEsQ0FDaEM7SUFHSixNQUFNUyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1YsWUFBWSxDQUFDVyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0gsS0FBSyxFQUFFQztZQUFNO0lBQ3BEO0lBRUEsTUFBTUcsZUFBZSxDQUFDTDtRQUNsQkEsRUFBRU0sY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QmhCO0lBQ3JDLCtEQUErRDtJQUNuRTtJQUVBLHFCQUNJLDhEQUFDSCx1REFBU0E7a0JBQ04sNEVBQUNvQjtZQUFJQyxXQUFVO3NCQUVYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUE2Qjs7Ozs7O29CQUFpQjtrQ0FFM0QsOERBQUNFO3dCQUNHQyxVQUFVUjt3QkFDVkssV0FBVTs7MENBRVYsOERBQUNEOztrREFDRyw4REFBQ0s7d0NBQ0dDLFNBQVE7d0NBQ1JMLFdBQVU7a0RBQ2I7Ozs7OztrREFHRCw4REFBQ007d0NBQ0dDLE1BQUs7d0NBQ0xoQixNQUFLO3dDQUNMaUIsSUFBRzt3Q0FDSEMsUUFBUTt3Q0FDUlQsV0FBV1o7d0NBQ1hJLE9BQU9WLFNBQVNFLGNBQWM7d0NBQzlCMEIsVUFBVXJCOzs7Ozs7Ozs7Ozs7MENBR2xCLDhEQUFDVTs7a0RBQ0csOERBQUNLO3dDQUNHQyxTQUFRO3dDQUNSTCxXQUFVO2tEQUNiOzs7Ozs7a0RBR0QsOERBQUNNO3dDQUNHQyxNQUFLO3dDQUNMaEIsTUFBSzt3Q0FDTGlCLElBQUc7d0NBQ0hDLFFBQVE7d0NBQ1JULFdBQVdaO3dDQUNYSSxPQUFPVixTQUFTRyxPQUFPO3dDQUN2QnlCLFVBQVVyQjs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ1U7O2tEQUNHLDhEQUFDSzt3Q0FDR0MsU0FBUTt3Q0FDUkwsV0FBVTtrREFDYjs7Ozs7O2tEQUdELDhEQUFDTTt3Q0FDR0MsTUFBSzt3Q0FDTGhCLE1BQUs7d0NBQ0xpQixJQUFHO3dDQUNIQyxRQUFRO3dDQUNSVCxXQUFXWjt3Q0FDWEksT0FBT1YsU0FBU0ksZ0JBQWdCO3dDQUNoQ3dCLFVBQVVyQjs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ1U7O2tEQUNHLDhEQUFDSzt3Q0FDR0MsU0FBUTt3Q0FDUkwsV0FBVTtrREFDYjs7Ozs7O2tEQUdELDhEQUFDTTt3Q0FDR0MsTUFBSzt3Q0FDTGhCLE1BQUs7d0NBQ0xpQixJQUFHO3dDQUNIQyxRQUFRO3dDQUNSVCxXQUFXWjt3Q0FDWEksT0FBT1YsU0FBU0ssY0FBYzt3Q0FDOUJ1QixVQUFVckI7Ozs7Ozs7Ozs7OzswQ0FHbEIsOERBQUNVOzBDQUNHLDRFQUFDWTtvQ0FDR0osTUFBSztvQ0FDTFAsV0FBVTs4Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdCO0dBbkhNbkI7S0FBQUE7QUFxSE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NyZWF0ZS9wYWdlLmpzeD8xZTU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL2Rhc2hib2FyZC9wYWdlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBDcmVhdGVQb2QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGRvY2tlcmh1YkltYWdlOiBcIlwiLFxuICAgICAgICBhcHBOYW1lOiBcIlwiLFxuICAgICAgICBudW1iZXJPZlJlcGxpY2FzOiBcIlwiLFxuICAgICAgICB0cmlnZ2VyQ29tbWFuZDogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGlucHV0U3R5bGVDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgXCJtdC0yIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1ibHVlLTgwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBwLTJcIlxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBEYXRhIFN1Ym1pdHRlZDogXCIsIGZvcm1EYXRhKTtcbiAgICAgICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IGhhbmRsZSB0aGUgQVBJIGNhbGwgdG8gY3JlYXRlIGEgcG9kXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXNoYm9hcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgcHQtMjAgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgey8qIEFkanVzdGVkIGZvciBubyBleGFjdCBjZW50ZXJpbmcgYW5kIHRvIGZpdCB0aGUgZm9ybSBuaWNlbHkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgdy1mdWxsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTcwMCBtYi00XCI+Q3JlYXRlIGEgUG9kPC9wPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgey8qIFRpdGxlIGFkZGVkIGRpcmVjdGx5IGFib3ZlIHRoZSBmb3JtICovfVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNiBiZy13aGl0ZSBwLTggc2hhZG93LWxnIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZG9ja2VyaHViSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9ja2VyaHViIEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZG9ja2VyaHViSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRvY2tlcmh1YkltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmRvY2tlcmh1YkltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhcHBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcCBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXBwTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXBwTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRTdHlsZUNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJudW1iZXJPZlJlcGxpY2FzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBSZXBsaWNhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWJlck9mUmVwbGljYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm51bWJlck9mUmVwbGljYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGVDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubnVtYmVyT2ZSZXBsaWNhc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidHJpZ2dlckNvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJpZ2dlciBDb21tYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJpZ2dlckNvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRyaWdnZXJDb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRyaWdnZXJDb21tYW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBQb2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EYXNoYm9hcmQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwiY2xhc3NOYW1lcyIsIkNyZWF0ZVBvZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJkb2NrZXJodWJJbWFnZSIsImFwcE5hbWUiLCJudW1iZXJPZlJlcGxpY2FzIiwidHJpZ2dlckNvbW1hbmQiLCJpbnB1dFN0eWxlQ2xhc3NlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.jsx\n"));

/***/ })

});