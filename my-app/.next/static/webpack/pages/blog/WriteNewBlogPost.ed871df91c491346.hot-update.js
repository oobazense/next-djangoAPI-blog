"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/WriteNewBlogPost",{

/***/ "./src/pages/blog/WriteNewBlogPost.js":
/*!********************************************!*\
  !*** ./src/pages/blog/WriteNewBlogPost.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WriteNewBlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WriteNewBlogPost() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/posts/\", formData);\n            console.log(response.data);\n            setTitle(\"\");\n            setContent(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Blog page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white mb-8\",\n                    children: \"Create a new post\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"w-3/1 flex flex-col items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Title:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: title,\n                                        onChange: (e)=>setTitle(e.target.value),\n                                        className: \"border-2 border-gray-500 bg-current w-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Content:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: content,\n                                        onChange: (e)=>setContent(e.target.value),\n                                        className: \"border-2 border-gray-500 bg-current w-full h-64\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"border-2 border-gray-500 text-white\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/codespaces-blank/my-app/src/pages/blog/WriteNewBlogPost.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(WriteNewBlogPost, \"eiXkh+GEjRZ8Svxty8bnXm2rLL0=\");\n_c = WriteNewBlogPost;\nvar _c;\n$RefreshReg$(_c, \"WriteNewBlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9Xcml0ZU5ld0Jsb2dQb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ2U7QUFFMUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVEsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUM7UUFFTixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxPQUFPLFNBQVNUO1FBQ3pCTyxTQUFTRSxPQUFPLFdBQVdQO1FBRTNCLElBQUk7WUFDRixNQUFNUSxXQUFXLE1BQU1iLGtEQUFVYyxDQUMvQixvQ0FDQUo7WUFFRkssUUFBUUMsSUFBSUgsU0FBU0k7WUFDckJiLFNBQVM7WUFDVEUsV0FBVztRQUNiLEVBQUUsT0FBT1ksT0FBTztZQUNkSCxRQUFRRyxNQUFNLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakIsMERBQU1BO1FBQUNFLE9BQU07a0JBQ1osNEVBQUNnQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWtCOzs7Ozs7OEJBQ2hDLDhEQUFDRTtvQkFBS0MsVUFBVWhCO29CQUFjYSxXQUFVOztzQ0FDdEMsOERBQUNJOzRCQUFNSixXQUFVOztnQ0FBb0I7OENBRW5DLDhEQUFDSzs4Q0FDRCw0RUFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU96Qjt3Q0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxPQUFPSDt3Q0FDbkNSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDWTs7Ozs7c0NBQ0QsOERBQUNSOzRCQUFNSixXQUFVOztnQ0FBb0I7OENBRW5DLDhEQUFDSzs4Q0FDQyw0RUFBQ1E7d0NBQ0RMLE9BQU92Qjt3Q0FDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFdBQVd3QixFQUFFQyxPQUFPSDt3Q0FDckNSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDWTs7Ozs7c0NBQ0QsOERBQUNFOzRCQUFPUCxNQUFLOzRCQUFTUCxXQUFVO3NDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEY7R0EzRHdCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvV3JpdGVOZXdCbG9nUG9zdC5qcz8xOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZU5ld0Jsb2dQb3N0KCkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBjb250ZW50KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0cy9cIixcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldFRpdGxlKFwiXCIpO1xuICAgICAgc2V0Q29udGVudChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHBvc3Q6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiQmxvZyBwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi04XCI+Q3JlYXRlIGEgbmV3IHBvc3Q8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LTMvMSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIGJnLWN1cnJlbnQgdy1mdWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIENvbnRlbnQ6XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgYmctY3VycmVudCB3LWZ1bGwgaC02NFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxheW91dCIsIldyaXRlTmV3QmxvZ1Bvc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwicCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/WriteNewBlogPost.js\n"));

/***/ })

});