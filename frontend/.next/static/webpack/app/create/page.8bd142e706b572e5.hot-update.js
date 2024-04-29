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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/page */ \"(app-pages-browser)/./app/dashboard/page.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst CreatePod = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        dockerhubImage: \"\",\n        appName: \"\",\n        numberOfReplicas: \"\",\n        triggerCommand: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form Data Submitted: \", formData);\n    // Here you would typically handle the API call to create a pod\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dashboard_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"dockerhubImage\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Dockerhub Image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"dockerhubImage\",\n                                id: \"dockerhubImage\",\n                                required: true,\n                                className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\",\n                                value: formData.dockerhubImage,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"appName\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"App Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"appName\",\n                                id: \"appName\",\n                                required: true,\n                                className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\",\n                                value: formData.appName,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"numberOfReplicas\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Number of Replicas\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"numberOfReplicas\",\n                                id: \"numberOfReplicas\",\n                                required: true,\n                                className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\",\n                                value: formData.numberOfReplicas,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"triggerCommand\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Trigger Command\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"triggerCommand\",\n                                id: \"triggerCommand\",\n                                required: true,\n                                className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\",\n                                value: formData.triggerCommand,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                            children: \"Create Pod\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/app/create/page.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreatePod, \"sI8jgMhLQTjZN2XNEXeF+n8L/lo=\");\n_c = CreatePod;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePod);\nvar _c;\n$RefreshReg$(_c, \"CreatePod\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNFO0FBRTFDLE1BQU1HLFlBQVk7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxnQkFBZ0I7UUFDaEJDLFNBQVM7UUFDVEMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7SUFDcEI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsWUFBWSxDQUFDVSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0gsS0FBSyxFQUFFQztZQUFNO0lBQ3BEO0lBRUEsTUFBTUcsZUFBZSxDQUFDTDtRQUNsQkEsRUFBRU0sY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QmY7SUFDckMsK0RBQStEO0lBQ25FO0lBRUEscUJBQ0ksOERBQUNGLHVEQUFTQTtrQkFDTiw0RUFBQ2tCO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNDO2dCQUFLQyxVQUFVUDtnQkFBY0ssV0FBVTs7a0NBQ3BDLDhEQUFDRDs7MENBQ0csOERBQUNJO2dDQUNHQyxTQUFRO2dDQUNSSixXQUFVOzBDQUNiOzs7Ozs7MENBR0QsOERBQUNLO2dDQUNHQyxNQUFLO2dDQUNMZixNQUFLO2dDQUNMZ0IsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUlIsV0FBVTtnQ0FDVlIsT0FBT1QsU0FBU0UsY0FBYztnQ0FDOUJ3QixVQUFVcEI7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNVOzswQ0FDRyw4REFBQ0k7Z0NBQ0dDLFNBQVE7Z0NBQ1JKLFdBQVU7MENBQ2I7Ozs7OzswQ0FHRCw4REFBQ0s7Z0NBQ0dDLE1BQUs7Z0NBQ0xmLE1BQUs7Z0NBQ0xnQixJQUFHO2dDQUNIQyxRQUFRO2dDQUNSUixXQUFVO2dDQUNWUixPQUFPVCxTQUFTRyxPQUFPO2dDQUN2QnVCLFVBQVVwQjs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ1U7OzBDQUNHLDhEQUFDSTtnQ0FDR0MsU0FBUTtnQ0FDUkosV0FBVTswQ0FDYjs7Ozs7OzBDQUdELDhEQUFDSztnQ0FDR0MsTUFBSztnQ0FDTGYsTUFBSztnQ0FDTGdCLElBQUc7Z0NBQ0hDLFFBQVE7Z0NBQ1JSLFdBQVU7Z0NBQ1ZSLE9BQU9ULFNBQVNJLGdCQUFnQjtnQ0FDaENzQixVQUFVcEI7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNVOzswQ0FDRyw4REFBQ0k7Z0NBQ0dDLFNBQVE7Z0NBQ1JKLFdBQVU7MENBQ2I7Ozs7OzswQ0FHRCw4REFBQ0s7Z0NBQ0dDLE1BQUs7Z0NBQ0xmLE1BQUs7Z0NBQ0xnQixJQUFHO2dDQUNIQyxRQUFRO2dDQUNSUixXQUFVO2dDQUNWUixPQUFPVCxTQUFTSyxjQUFjO2dDQUM5QnFCLFVBQVVwQjs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ1U7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNVOzRCQUNHSixNQUFLOzRCQUNMTixXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0EzR01sQjtLQUFBQTtBQTZHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY3JlYXRlL3BhZ2UuanN4PzFlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9kYXNoYm9hcmQvcGFnZVwiO1xuXG5jb25zdCBDcmVhdGVQb2QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGRvY2tlcmh1YkltYWdlOiBcIlwiLFxuICAgICAgICBhcHBOYW1lOiBcIlwiLFxuICAgICAgICBudW1iZXJPZlJlcGxpY2FzOiBcIlwiLFxuICAgICAgICB0cmlnZ2VyQ29tbWFuZDogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIERhdGEgU3VibWl0dGVkOiBcIiwgZm9ybURhdGEpO1xuICAgICAgICAvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgaGFuZGxlIHRoZSBBUEkgY2FsbCB0byBjcmVhdGUgYSBwb2RcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERhc2hib2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJkb2NrZXJodWJJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2NrZXJodWIgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRvY2tlcmh1YkltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRvY2tlcmh1YkltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTMwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kb2NrZXJodWJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhcHBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcCBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhcHBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFwcE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tMzAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOnJpbmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmFwcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibnVtYmVyT2ZSZXBsaWNhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgUmVwbGljYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWJlck9mUmVwbGljYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtYmVyT2ZSZXBsaWNhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby0zMDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubnVtYmVyT2ZSZXBsaWNhc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0cmlnZ2VyQ29tbWFuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmlnZ2VyIENvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyaWdnZXJDb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRyaWdnZXJDb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTMwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50cmlnZ2VyQ29tbWFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFBvZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Rhc2hib2FyZD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9kO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJDcmVhdGVQb2QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZG9ja2VyaHViSW1hZ2UiLCJhcHBOYW1lIiwibnVtYmVyT2ZSZXBsaWNhcyIsInRyaWdnZXJDb21tYW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.jsx\n"));

/***/ })

});