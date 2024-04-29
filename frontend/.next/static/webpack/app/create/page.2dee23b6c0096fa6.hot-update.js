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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/page */ \"(app-pages-browser)/./app/dashboard/page.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CreatePod = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        dockerhubImage: \"\",\n        appName: \"\",\n        numberOfReplicas: \"\",\n        triggerCommand: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form Data Submitted: \", formData);\n    // Here you would typically handle the API call to create a pod\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dashboard_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl w-full px-4 sm:px-6 lg:px-8\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-6 bg-white p-8 shadow-lg rounded-lg\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"dockerhubImage\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Dockerhub Image\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"dockerhubImage\",\n                                            id: \"dockerhubImage\",\n                                            required: true,\n                                            className: \"mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2\",\n                                            value: formData.dockerhubImage,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"appName\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"App Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"appName\",\n                                            id: \"appName\",\n                                            required: true,\n                                            className: \"mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2\",\n                                            value: formData.appName,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"numberOfReplicas\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Number of Replicas\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"numberOfReplicas\",\n                                            id: \"numberOfReplicas\",\n                                            required: true,\n                                            className: \"mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2\",\n                                            value: formData.numberOfReplicas,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"triggerCommand\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Trigger Command\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"triggerCommand\",\n                                            id: \"triggerCommand\",\n                                            required: true,\n                                            className: \"mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2\",\n                                            value: formData.triggerCommand,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                        children: \"Create Pod\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreatePod, \"sI8jgMhLQTjZN2XNEXeF+n8L/lo=\");\n_c = CreatePod;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePod);\nvar _c;\n$RefreshReg$(_c, \"CreatePod\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUV3QztBQUNFO0FBRTFDLE1BQU1HLFlBQVk7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxnQkFBZ0I7UUFDaEJDLFNBQVM7UUFDVEMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7SUFDcEI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsWUFBWSxDQUFDVSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0gsS0FBSyxFQUFFQztZQUFNO0lBQ3BEO0lBRUEsTUFBTUcsZUFBZSxDQUFDTDtRQUNsQkEsRUFBRU0sY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QmY7SUFDckMsK0RBQStEO0lBQ25FO0lBRUEscUJBQ0ksOERBQUNGLHVEQUFTQTtrQkFDTiw0RUFBQ2tCO1lBQUlDLFdBQVU7O2dCQUNWOzhCQUVELDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBQ1Y7c0NBRUQsOERBQUNDOzRCQUNHQyxVQUFVUDs0QkFDVkssV0FBVTs7Z0NBRVQ7OENBRUQsOERBQUNEOztzREFDRyw4REFBQ0k7NENBQ0dDLFNBQVE7NENBQ1JKLFdBQVU7c0RBQ2I7Ozs7OztzREFHRCw4REFBQ0s7NENBQ0dDLE1BQUs7NENBQ0xmLE1BQUs7NENBQ0xnQixJQUFHOzRDQUNIQyxRQUFROzRDQUNSUixXQUFVOzRDQUNWUixPQUFPVCxTQUFTRSxjQUFjOzRDQUM5QndCLFVBQVVwQjs7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ1U7O3NEQUNHLDhEQUFDSTs0Q0FDR0MsU0FBUTs0Q0FDUkosV0FBVTtzREFDYjs7Ozs7O3NEQUdELDhEQUFDSzs0Q0FDR0MsTUFBSzs0Q0FDTGYsTUFBSzs0Q0FDTGdCLElBQUc7NENBQ0hDLFFBQVE7NENBQ1JSLFdBQVU7NENBQ1ZSLE9BQU9ULFNBQVNHLE9BQU87NENBQ3ZCdUIsVUFBVXBCOzs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDVTs7c0RBQ0csOERBQUNJOzRDQUNHQyxTQUFROzRDQUNSSixXQUFVO3NEQUNiOzs7Ozs7c0RBR0QsOERBQUNLOzRDQUNHQyxNQUFLOzRDQUNMZixNQUFLOzRDQUNMZ0IsSUFBRzs0Q0FDSEMsUUFBUTs0Q0FDUlIsV0FBVTs0Q0FDVlIsT0FBT1QsU0FBU0ksZ0JBQWdCOzRDQUNoQ3NCLFVBQVVwQjs7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ1U7O3NEQUNHLDhEQUFDSTs0Q0FDR0MsU0FBUTs0Q0FDUkosV0FBVTtzREFDYjs7Ozs7O3NEQUdELDhEQUFDSzs0Q0FDR0MsTUFBSzs0Q0FDTGYsTUFBSzs0Q0FDTGdCLElBQUc7NENBQ0hDLFFBQVE7NENBQ1JSLFdBQVU7NENBQ1ZSLE9BQU9ULFNBQVNLLGNBQWM7NENBQzlCcUIsVUFBVXBCOzs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDVTs4Q0FDRyw0RUFBQ1c7d0NBQ0dKLE1BQUs7d0NBQ0xOLFdBQVU7a0RBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0FsSE1sQjtLQUFBQTtBQW9ITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY3JlYXRlL3BhZ2UuanN4PzFlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vZGFzaGJvYXJkL3BhZ2VcIjtcblxuY29uc3QgQ3JlYXRlUG9kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBkb2NrZXJodWJJbWFnZTogXCJcIixcbiAgICAgICAgYXBwTmFtZTogXCJcIixcbiAgICAgICAgbnVtYmVyT2ZSZXBsaWNhczogXCJcIixcbiAgICAgICAgdHJpZ2dlckNvbW1hbmQ6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBEYXRhIFN1Ym1pdHRlZDogXCIsIGZvcm1EYXRhKTtcbiAgICAgICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IGhhbmRsZSB0aGUgQVBJIGNhbGwgdG8gY3JlYXRlIGEgcG9kXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXNoYm9hcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIHsvKiBDZW50ZXJpbmcgdGhlIGZvcm0gdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIHctZnVsbCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbnN1cmVzIHRoZSBmb3JtIGRvZXMgbm90IHN0cmV0Y2ggYmV5b25kIDR4bCB3aWR0aCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTYgYmctd2hpdGUgcC04IHNoYWRvdy1sZyByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZGVkIGJhY2tncm91bmQsIHBhZGRpbmcsIHNoYWRvdywgYW5kIHJvdW5kZWQgY29ybmVycyBmb3IgYmV0dGVyIHZpc3VhbCBzdHJ1Y3R1cmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZG9ja2VyaHViSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9ja2VyaHViIEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZG9ja2VyaHViSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRvY2tlcmh1YkltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZG9ja2VyaHViSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImFwcE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhcHBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcHBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYXBwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibnVtYmVyT2ZSZXBsaWNhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgUmVwbGljYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1iZXJPZlJlcGxpY2FzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1iZXJPZlJlcGxpY2FzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubnVtYmVyT2ZSZXBsaWNhc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidHJpZ2dlckNvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJpZ2dlciBDb21tYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJpZ2dlckNvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRyaWdnZXJDb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudHJpZ2dlckNvbW1hbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFBvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Rhc2hib2FyZD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9kO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJDcmVhdGVQb2QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZG9ja2VyaHViSW1hZ2UiLCJhcHBOYW1lIiwibnVtYmVyT2ZSZXBsaWNhcyIsInRyaWdnZXJDb21tYW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.jsx\n"));

/***/ })

});