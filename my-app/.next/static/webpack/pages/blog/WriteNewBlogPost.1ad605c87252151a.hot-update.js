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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WriteNewBlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WriteNewBlogPost() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptOrder, setChatgptOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptTitleResponse, setChatgptTitleResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/posts/\", formData);\n            console.log(response.data);\n            setTitle(\"\");\n            setContent(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    const chatgptTitleSubmit = async (title)=>{\n        console.log(title);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/api/chatgpt/\".concat(title, \"\\xa5n\").concat(chatgptOrder) + \"\\xa5n 上の内容に沿ってブログ記事で使ういい感じのタイトルだけを返してください\").then((res)=>{\n            console.log(res.data);\n            setChatgptTitleResponse(res.data);\n        });\n    };\n    const chatgptContentSubmit = async (content)=>{\n        console.log(content);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/api/chatgpt/\".concat(content, \"\\xa5n\").concat(chatgptOrder) + \"\\xa5n 上の内容に沿ってブログ記事の内容だけを返してください\").then((res)=>{\n            console.log(res.data);\n            setChatgptContentResponse(res.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"これはchatgptTitleResponseです\", chatgptTitleResponse);\n        setTitle(chatgptTitleResponse);\n    }, [\n        chatgptTitleResponse\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"これはchatgptContentResponseです\", chatgptContentResponse);\n        setTitle(chatgptContentResponse);\n    }, [\n        chatgptTitleResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Blog page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-cols-3 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-green-400 mb-24 flex flex-col items-center text-4xl\",\n                            children: \"Create a new post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"flex flex-col items-start m-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Title:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            type: \"text\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Content:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: content,\n                                                onChange: (e)=>setContent(e.target.value),\n                                                className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"border-2 border-gray-500 text-white\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Titleのgptへの指示:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    type: \"text\",\n                                    value: chatgptOrder,\n                                    onChange: (e)=>setChatgptOrder(e.target.value),\n                                    className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Contentのgptへの指示:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: content,\n                                        onChange: (e)=>setContent(e.target.value),\n                                        className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-2 border-gray-500 text-white mt-24\",\n                            onClick: ()=>{\n                                chatgptTitleSubmit(title);\n                            },\n                            children: \"Title ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-2 border-gray-500 text-white mt-24\",\n                            onClick: ()=>{\n                                chatgptContentSubmit(content);\n                            },\n                            children: \"Content ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(WriteNewBlogPost, \"o+23G0eiu7XQvq/eSvPH7h52UXw=\");\n_c = WriteNewBlogPost;\nvar _c;\n$RefreshReg$(_c, \"WriteNewBlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztvQ0FDUGlDLFVBQVUsQ0FBQ0MsSUFBTWpDLGdCQUFnQmlDLEVBQUVDLE9BQU9IO29DQUMxQ1IsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ0k7NEJBQU1KLFdBQVU7O2dDQUFvQjs4Q0FFakMsOERBQUNZOzhDQUNDLDRFQUFDTjt3Q0FDREUsT0FBT2xDO3dDQUNQbUMsVUFBVSxDQUFDQyxJQUFNbkMsV0FBV21DLEVBQUVDLE9BQU9IO3dDQUNyQ1IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWxCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUEwQjs7Ozs7O3NDQUN4Qyw4REFBQ2E7NEJBQU9iLFdBQVU7NEJBQTRDYyxTQUFTO2dDQUFLdEIsbUJBQW1CcEI7NEJBQU07c0NBQUc7Ozs7OztzQ0FDeEcsOERBQUN5Qzs0QkFBT2IsV0FBVTs0QkFBNENjLFNBQVM7Z0NBQUtsQixxQkFBcUJ0Qjs0QkFBUTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEg7R0F0SXdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmxvZy9Xcml0ZU5ld0Jsb2dQb3N0LmpzPzE5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JpdGVOZXdCbG9nUG9zdCgpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0Z3B0T3JkZXIsIHNldENoYXRncHRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYXRncHRUaXRsZVJlc3BvbnNlLCBzZXRDaGF0Z3B0VGl0bGVSZXNwb25zZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBjb250ZW50KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0cy9cIixcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldFRpdGxlKFwiXCIpO1xuICAgICAgc2V0Q29udGVudChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHBvc3Q6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhdGdwdFRpdGxlU3VibWl0ID0gYXN5bmMgKHRpdGxlKSA9PiB7XG4gICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9jaGF0Z3B0LyR7dGl0bGV9wqVuJHtjaGF0Z3B0T3JkZXJ9YCArIFxuICAgICAgICAgIFwiwqVuIOS4iuOBruWGheWuueOBq+ayv+OBo+OBpuODluODreOCsOiomOS6i+OBp+S9v+OBhuOBhOOBhOaEn+OBmOOBruOCv+OCpOODiOODq+OBoOOBkeOCkui/lOOBl+OBpuOBj+OBoOOBleOBhFwiXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0Q2hhdGdwdFRpdGxlUmVzcG9uc2UocmVzLmRhdGEpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hhdGdwdENvbnRlbnRTdWJtaXQgPSBhc3luYyAoY29udGVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9jaGF0Z3B0LyR7Y29udGVudH3CpW4ke2NoYXRncHRPcmRlcn1gICsgXG4gICAgICAgICAgXCLCpW4g5LiK44Gu5YaF5a6544Gr5rK/44Gj44Gm44OW44Ot44Kw6KiY5LqL44Gu5YaF5a6544Gg44GR44KS6L+U44GX44Gm44GP44Gg44GV44GEXCJcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBzZXRDaGF0Z3B0Q29udGVudFJlc3BvbnNlKHJlcy5kYXRhKTtcbiAgICAgIH0pO1xuICB9O1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuOBk+OCjOOBr2NoYXRncHRUaXRsZVJlc3BvbnNl44Gn44GZXCIsY2hhdGdwdFRpdGxlUmVzcG9uc2UpO1xuICAgIHNldFRpdGxlKGNoYXRncHRUaXRsZVJlc3BvbnNlKTtcbiAgfSwgW2NoYXRncHRUaXRsZVJlc3BvbnNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuOBk+OCjOOBr2NoYXRncHRDb250ZW50UmVzcG9uc2XjgafjgZlcIixjaGF0Z3B0Q29udGVudFJlc3BvbnNlKTtcbiAgICBzZXRUaXRsZShjaGF0Z3B0Q29udGVudFJlc3BvbnNlKTtcbiAgfSwgW2NoYXRncHRUaXRsZVJlc3BvbnNlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiQmxvZyBwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHsvKiDlt6bjga7opoHntKAgKi99XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBtYi0yNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LTR4bFwiPkNyZWF0ZSBhIG5ldyBwb3N0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IG0tNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIFRpdGxlOlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIGJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIENvbnRlbnQ6XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBiZy13aGl0ZSBoLTY0IHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiDnnJ/jgpPkuK3jga7opoHntKAgKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXQtOCB0ZXh0LXhsXCI+TGV0J3MgQ2hhdEdQVDwvaDE+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIFRpdGxl44GuZ3B044G444Gu5oyH56S6OlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjaGF0Z3B0T3JkZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGF0Z3B0T3JkZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS01MDAgYmctd2hpdGUgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPlxuICAgICAgICAgICAgICBDb250ZW5044GuZ3B044G444Gu5oyH56S6OlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS01MDAgYmctd2hpdGUgaC02NCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiDlj7Pjga7opoHntKAgKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXQtOCB0ZXh0LXhsXCI+TGV0J3MgQ2hhdEdQVDwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgdGV4dC13aGl0ZSBtdC0yNFwiIG9uQ2xpY2s9eygpPT57Y2hhdGdwdFRpdGxlU3VibWl0KHRpdGxlKX19PlRpdGxlIENoYXRHUFQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXdoaXRlIG10LTI0XCIgb25DbGljaz17KCk9PntjaGF0Z3B0Q29udGVudFN1Ym1pdChjb250ZW50KX19PkNvbnRlbnQgQ2hhdEdQVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxheW91dCIsIldyaXRlTmV3QmxvZ1Bvc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjaGF0Z3B0T3JkZXIiLCJzZXRDaGF0Z3B0T3JkZXIiLCJjaGF0Z3B0VGl0bGVSZXNwb25zZSIsInNldENoYXRncHRUaXRsZVJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiY2hhdGdwdFRpdGxlU3VibWl0IiwiZ2V0IiwidGhlbiIsInJlcyIsImNoYXRncHRDb250ZW50U3VibWl0Iiwic2V0Q2hhdGdwdENvbnRlbnRSZXNwb25zZSIsImNoYXRncHRDb250ZW50UmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiYnIiLCJ0ZXh0YXJlYSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/WriteNewBlogPost.js\n"));

/***/ })

});