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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/PlusCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/CubeTransparentIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/GlobeAltIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDoubleLeftIcon,CubeTransparentIcon,GlobeAltIcon,HomeIcon,PlusCircleIcon,XCircleIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/ChevronDoubleLeftIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst menuItems = [\n    {\n        id: 1,\n        label: \"Home\",\n        icon: _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        link: \"/dashboard\"\n    },\n    {\n        id: 2,\n        label: \"Create Pod\",\n        icon: _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        link: \"/create\"\n    },\n    {\n        id: 3,\n        label: \"Trigger Pod\",\n        icon: _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        link: \"/dashboard\"\n    },\n    {\n        id: 4,\n        label: \"Delete Pod\",\n        icon: _barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        link: \"/dashboard\"\n    }\n];\nfunction Sidebar(param) {\n    let {} = param;\n    _s();\n    const [toggleCollapse, setToggleCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isCollapsible, setIsCollapsible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const activeMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>menuItems.find((menu)=>menu.link === router.pathname), [\n        router.pathname\n    ]);\n    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"bg-blue-950 h-screen px-4 pt-8 pb-4 bg-light justify-between flex-col text-white\", {\n        [\"w-80\"]: !toggleCollapse,\n        [\"w-20\"]: toggleCollapse\n    });\n    const collapseIconClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"p-4 rounded absolute right-0 text-black\", {\n        \"rotate-180\": toggleCollapse\n    });\n    const getNavItemClasses = (menu)=>{\n        return classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"flex items-center cursor-pointer hover:bg-indigo-50 rounded w-full overflow-hidden whitespace-nowrap\", {\n            [\"bg-slate-100\"]: (activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.id) === menu.id\n        });\n    };\n    const onMouseOver = ()=>{\n        setIsCollapsible(!isCollapsible);\n    };\n    const handleSidebarToggle = ()=>{\n        setToggleCollapse(!toggleCollapse);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: wrapperClasses,\n        onMouseEnter: onMouseOver,\n        onMouseLeave: onMouseOver,\n        style: {\n            transition: \"width 300ms cubic-bezier(0.2, 0, 0, 1) 0s\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center pl-1 gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"mt-1 text-lg font-medium\", {\n                                            hidden: toggleCollapse\n                                        }),\n                                        children: \"k3s Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            isCollapsible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: collapseIconClasses,\n                                onClick: handleSidebarToggle,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDoubleLeftIcon_CubeTransparentIcon_GlobeAltIcon_HomeIcon_PlusCircleIcon_XCircleIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start mt-24\",\n                        children: menuItems.map((param)=>{\n                            let { icon: Icon, ...menu } = param;\n                            const classes = getNavItemClasses(menu);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: menu.link,\n                                className: classes + \" flex py-4 px-3 items-center w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"2.5rem\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                            className: \"h-6 w-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 33\n                                    }, this),\n                                    !toggleCollapse && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-medium\",\n                                        children: menu.label\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 37\n                                    }, this) // Ensure to display the label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hrithik/Desktop/suchi-next/k3s-dashboard/frontend/components/Sidebar.jsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"NPj4TqE4u/CAQrTVOkzP+EpdrA4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQztBQUNOO0FBUUQ7QUFDUztBQUNmO0FBRTdCLE1BQU1XLFlBQVk7SUFDZDtRQUFFQyxJQUFJO1FBQUdDLE9BQU87UUFBUUMsTUFBTVYsa0xBQVFBO1FBQUVXLE1BQU07SUFBYTtJQUMzRDtRQUFFSCxJQUFJO1FBQUdDLE9BQU87UUFBY0MsTUFBTVQsa0xBQWNBO1FBQUVVLE1BQU07SUFBVTtJQUNwRTtRQUNJSCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTVIsa0xBQW1CQTtRQUN6QlMsTUFBTTtJQUNWO0lBQ0E7UUFBRUgsSUFBSTtRQUFHQyxPQUFPO1FBQWNDLE1BQU1QLGtMQUFXQTtRQUFFUSxNQUFNO0lBQWE7Q0FDdkU7QUFFYyxTQUFTQyxRQUFRLEtBQUU7UUFBRixFQUFFLEdBQUY7O0lBQzVCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2tCLGVBQWVDLGlCQUFpQixHQUFHbkIsK0NBQVFBLENBQUM7SUFFbkQsTUFBTW9CLFNBQVNaLDBEQUFTQTtJQUV4QixNQUFNYSxhQUFhdEIsOENBQU9BLENBQ3RCLElBQU1XLFVBQVVZLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVCxJQUFJLEtBQUtNLE9BQU9JLFFBQVEsR0FDNUQ7UUFBQ0osT0FBT0ksUUFBUTtLQUFDO0lBR3JCLE1BQU1DLGlCQUFpQnhCLGlEQUFVQSxDQUM3QixvRkFDQTtRQUNJLENBQUMsT0FBTyxFQUFFLENBQUNlO1FBQ1gsQ0FBQyxPQUFPLEVBQUVBO0lBQ2Q7SUFHSixNQUFNVSxzQkFBc0J6QixpREFBVUEsQ0FDbEMsMkNBQ0E7UUFDSSxjQUFjZTtJQUNsQjtJQUdKLE1BQU1XLG9CQUFvQixDQUFDSjtRQUN2QixPQUFPdEIsaURBQVVBLENBQ2Isd0dBQ0E7WUFDSSxDQUFDLGVBQWUsRUFBRW9CLENBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBWVYsRUFBRSxNQUFLWSxLQUFLWixFQUFFO1FBQ2hEO0lBRVI7SUFFQSxNQUFNaUIsY0FBYztRQUNoQlQsaUJBQWlCLENBQUNEO0lBQ3RCO0lBRUEsTUFBTVcsc0JBQXNCO1FBQ3hCWixrQkFBa0IsQ0FBQ0Q7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ2M7UUFDR0MsV0FBV047UUFDWE8sY0FBY0o7UUFDZEssY0FBY0w7UUFDZE0sT0FBTztZQUFFQyxZQUFZO1FBQTRDOzswQkFFakUsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUN4QixrTEFBWUE7d0NBQUN3QixXQUFVOzs7Ozs7a0RBQ3hCLDhEQUFDSzt3Q0FDR0wsV0FBVzlCLGlEQUFVQSxDQUFDLDRCQUE0Qjs0Q0FDOUNvQyxRQUFRckI7d0NBQ1o7a0RBQ0g7Ozs7Ozs7Ozs7Ozs0QkFJSkUsK0JBQ0csOERBQUNvQjtnQ0FDR1AsV0FBV0w7Z0NBQ1hhLFNBQVNWOzBDQUVULDRFQUFDM0IsbUxBQXFCQTtvQ0FBQzZCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs3Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1ZyQixVQUFVOEIsR0FBRyxDQUFDO2dDQUFDLEVBQUUzQixNQUFNNEIsSUFBSSxFQUFFLEdBQUdsQixNQUFNOzRCQUNuQyxNQUFNbUIsVUFBVWYsa0JBQWtCSjs0QkFDbEMscUJBQ0ksOERBQUNkLGlEQUFJQTtnQ0FDRGtDLE1BQU1wQixLQUFLVCxJQUFJO2dDQUNmaUIsV0FDSVcsVUFDQTs7a0RBR0osOERBQUNaO3dDQUFJSSxPQUFPOzRDQUFFVSxPQUFPO3dDQUFTO2tEQUMxQiw0RUFBQ0g7NENBQUtWLFdBQVU7Ozs7Ozs7Ozs7O29DQUVuQixDQUFDZixnQ0FDRSw4REFBQ29CO3dDQUFLTCxXQUFVO2tEQUNYUixLQUFLWCxLQUFLOzs7Ozs2Q0FDUCw4QkFBOEI7Ozs7Ozs7d0JBSXREOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNrQjs7Ozs7Ozs7Ozs7QUFHYjtHQW5Hd0JmOztRQUlMUCxzREFBU0E7OztLQUpKTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanN4PzRjYjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtcbiAgICBDaGV2cm9uRG91YmxlTGVmdEljb24sXG4gICAgSG9tZUljb24sXG4gICAgUGx1c0NpcmNsZUljb24sXG4gICAgQ3ViZVRyYW5zcGFyZW50SWNvbixcbiAgICBYQ2lyY2xlSWNvbixcbiAgICBHbG9iZUFsdEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7IGlkOiAxLCBsYWJlbDogXCJIb21lXCIsIGljb246IEhvbWVJY29uLCBsaW5rOiBcIi9kYXNoYm9hcmRcIiB9LFxuICAgIHsgaWQ6IDIsIGxhYmVsOiBcIkNyZWF0ZSBQb2RcIiwgaWNvbjogUGx1c0NpcmNsZUljb24sIGxpbms6IFwiL2NyZWF0ZVwiIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbGFiZWw6IFwiVHJpZ2dlciBQb2RcIixcbiAgICAgICAgaWNvbjogQ3ViZVRyYW5zcGFyZW50SWNvbixcbiAgICAgICAgbGluazogXCIvZGFzaGJvYXJkXCIsXG4gICAgfSxcbiAgICB7IGlkOiA0LCBsYWJlbDogXCJEZWxldGUgUG9kXCIsIGljb246IFhDaXJjbGVJY29uLCBsaW5rOiBcIi9kYXNoYm9hcmRcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcih7fSkge1xuICAgIGNvbnN0IFt0b2dnbGVDb2xsYXBzZSwgc2V0VG9nZ2xlQ29sbGFwc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0NvbGxhcHNpYmxlLCBzZXRJc0NvbGxhcHNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgYWN0aXZlTWVudSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IG1lbnVJdGVtcy5maW5kKChtZW51KSA9PiBtZW51LmxpbmsgPT09IHJvdXRlci5wYXRobmFtZSksXG4gICAgICAgIFtyb3V0ZXIucGF0aG5hbWVdXG4gICAgKTtcblxuICAgIGNvbnN0IHdyYXBwZXJDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgXCJiZy1ibHVlLTk1MCBoLXNjcmVlbiBweC00IHB0LTggcGItNCBiZy1saWdodCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2wgdGV4dC13aGl0ZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBbXCJ3LTgwXCJdOiAhdG9nZ2xlQ29sbGFwc2UsXG4gICAgICAgICAgICBbXCJ3LTIwXCJdOiB0b2dnbGVDb2xsYXBzZSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBjb2xsYXBzZUljb25DbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgXCJwLTQgcm91bmRlZCBhYnNvbHV0ZSByaWdodC0wIHRleHQtYmxhY2tcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJyb3RhdGUtMTgwXCI6IHRvZ2dsZUNvbGxhcHNlLFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGdldE5hdkl0ZW1DbGFzc2VzID0gKG1lbnUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMoXG4gICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWluZGlnby01MCByb3VuZGVkIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gd2hpdGVzcGFjZS1ub3dyYXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbXCJiZy1zbGF0ZS0xMDBcIl06IGFjdGl2ZU1lbnU/LmlkID09PSBtZW51LmlkLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBvbk1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNDb2xsYXBzaWJsZSghaXNDb2xsYXBzaWJsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNpZGViYXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldFRvZ2dsZUNvbGxhcHNlKCF0b2dnbGVDb2xsYXBzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzZXN9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwid2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMCwgMSkgMHNcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBsLTEgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iZUFsdEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIm10LTEgdGV4dC1sZyBmb250LW1lZGl1bVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdG9nZ2xlQ29sbGFwc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgazNzIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2libGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sbGFwc2VJY29uQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWRlYmFyVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG91YmxlTGVmdEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBtdC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpY29uOiBJY29uLCAuLi5tZW51IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBnZXROYXZJdGVtQ2xhc3NlcyhtZW51KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bWVudS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBmbGV4IHB5LTQgcHgtMyBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMi41cmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdG9nZ2xlQ29sbGFwc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gLy8gRW5zdXJlIHRvIGRpc3BsYXkgdGhlIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsIkNoZXZyb25Eb3VibGVMZWZ0SWNvbiIsIkhvbWVJY29uIiwiUGx1c0NpcmNsZUljb24iLCJDdWJlVHJhbnNwYXJlbnRJY29uIiwiWENpcmNsZUljb24iLCJHbG9iZUFsdEljb24iLCJ1c2VSb3V0ZXIiLCJMaW5rIiwibWVudUl0ZW1zIiwiaWQiLCJsYWJlbCIsImljb24iLCJsaW5rIiwiU2lkZWJhciIsInRvZ2dsZUNvbGxhcHNlIiwic2V0VG9nZ2xlQ29sbGFwc2UiLCJpc0NvbGxhcHNpYmxlIiwic2V0SXNDb2xsYXBzaWJsZSIsInJvdXRlciIsImFjdGl2ZU1lbnUiLCJmaW5kIiwibWVudSIsInBhdGhuYW1lIiwid3JhcHBlckNsYXNzZXMiLCJjb2xsYXBzZUljb25DbGFzc2VzIiwiZ2V0TmF2SXRlbUNsYXNzZXMiLCJvbk1vdXNlT3ZlciIsImhhbmRsZVNpZGViYXJUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJzcGFuIiwiaGlkZGVuIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIkljb24iLCJjbGFzc2VzIiwiaHJlZiIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.jsx\n"));

/***/ })

});