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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WriteNewBlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WriteNewBlogPost() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/posts/\", formData);\n            console.log(response.data);\n            setTitle(\"\");\n            setContent(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Blog page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-cols-3 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"左のカラムの内容をここに追加\"\n                }, void 0, false, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mb-8 flex flex-col items-center text-3xl\",\n                            children: \"Create a new post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"flex flex-col items-start m-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Title:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            className: \"w-full border-2 border-gray-500 bg-white  text-black\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Content:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: content,\n                                                onChange: (e)=>setContent(e.target.value),\n                                                className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"border-2 border-gray-500 text-white\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"のカラムの内容をここに追加\"\n                }, void 0, false, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(WriteNewBlogPost, \"eiXkh+GEjRZ8Svxty8bnXm2rLL0=\");\n_c = WriteNewBlogPost;\nvar _c;\n$RefreshReg$(_c, \"WriteNewBlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9Xcml0ZU5ld0Jsb2dQb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ2U7QUFFMUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVEsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUM7UUFFTixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxPQUFPLFNBQVNUO1FBQ3pCTyxTQUFTRSxPQUFPLFdBQVdQO1FBRTNCLElBQUk7WUFDRixNQUFNUSxXQUFXLE1BQU1iLGtEQUFVYyxDQUMvQixvQ0FDQUo7WUFFRkssUUFBUUMsSUFBSUgsU0FBU0k7WUFDckJiLFNBQVM7WUFDVEUsV0FBVztRQUNiLEVBQUUsT0FBT1ksT0FBTztZQUNkSCxRQUFRRyxNQUFNLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakIsMERBQU1BO1FBQUNFLE9BQU07a0JBQ1osNEVBQUNnQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7OEJBQUk7Ozs7Ozs4QkFDTCw4REFBQ0E7O3NDQUNDLDhEQUFDRTs0QkFBR0QsV0FBVTtzQ0FBc0Q7Ozs7OztzQ0FDcEUsOERBQUNFOzRCQUFLQyxVQUFVaEI7NEJBQWNhLFdBQVU7OzhDQUN0Qyw4REFBQ0k7b0NBQU1KLFdBQVU7O3dDQUFvQjtzREFFbkMsOERBQUNLOzs7OztzREFDRCw4REFBQ0M7NENBQ0NDLE1BQUs7NENBQ0xDLE9BQU96Qjs0Q0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxPQUFPSDs0Q0FDbkNSLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0s7Ozs7OzhDQUNELDhEQUFDRDtvQ0FBTUosV0FBVTs7d0NBQW9CO3NEQUVuQyw4REFBQ1k7c0RBQ0MsNEVBQUNDO2dEQUNETCxPQUFPdkI7Z0RBQ1B3QixVQUFVLENBQUNDLElBQU14QixXQUFXd0IsRUFBRUMsT0FBT0g7Z0RBQ3JDUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJZCw4REFBQ0s7Ozs7OzhDQUNELDhEQUFDUztvQ0FBT1AsTUFBSztvQ0FBU1AsV0FBVTs4Q0FBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLMUUsOERBQUNEOzhCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBOUR3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nL1dyaXRlTmV3QmxvZ1Bvc3QuanM/MTljZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JpdGVOZXdCbG9nUG9zdCgpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgY29udGVudCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdHMvXCIsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRUaXRsZShcIlwiKTtcbiAgICAgIHNldENvbnRlbnQoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwb3N0OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkJsb2cgcGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICA8ZGl2PuW3puOBruOCq+ODqeODoOOBruWGheWuueOCkuOBk+OBk+OBq+i/veWKoDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC0zeGxcIj5DcmVhdGUgYSBuZXcgcG9zdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBtLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPlxuICAgICAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBiZy13aGl0ZSAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgQ29udGVudDpcbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIGJnLXdoaXRlIGgtNjQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PuOBruOCq+ODqeODoOOBruWGheWuueOCkuOBk+OBk+OBq+i/veWKoDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGF5b3V0IiwiV3JpdGVOZXdCbG9nUG9zdCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJiciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/WriteNewBlogPost.js\n"));

/***/ })

});