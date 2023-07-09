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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WriteNewBlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WriteNewBlogPost() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptOrder, setChatgptOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptTitleResponse, setChatgptTitleResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/posts/\", formData);\n            console.log(response.data);\n            setTitle(\"\");\n            setContent(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    const chatgptTitleSubmit = async (title)=>{\n        console.log(title);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/api/chatgpt/\".concat(title, \"\\xa5n\").concat(chatgptOrder) + \"\\xa5n 上の内容に沿ってブログ記事で使ういい感じのタイトルだけを返してください\").then((res)=>{\n            console.log(res.data);\n            setChatgptTitleResponse(res.data);\n        });\n    };\n    const chatgptContentSubmit = async (content)=>{\n        console.log(content);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/api/chatgpt/\".concat(content, \"\\xa5n\").concat(chatgptOrder) + \"\\xa5n 上の内容に沿ってブログ記事の内容だけを返してください\").then((res)=>{\n            console.log(res.data);\n            setChatgptContentResponse(res.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"これはchatgptTitleResponseです\", chatgptTitleResponse);\n        setTitle(chatgptTitleResponse);\n    }, [\n        chatgptTitleResponse\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"これはchatgptContentResponseです\", chatgptContentResponse);\n        setTitle(chatgptTitleResponse);\n    }, [\n        chatgptTitleResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Blog page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-cols-3 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-green-400 mb-24 flex flex-col items-center text-4xl\",\n                            children: \"Create a new post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"flex flex-col items-start m-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Title:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            type: \"text\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Content:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: content,\n                                                onChange: (e)=>setContent(e.target.value),\n                                                className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"border-2 border-gray-500 text-white\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Titleのgptへの指示:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    type: \"text\",\n                                    value: chatgptOrder,\n                                    onChange: (e)=>setChatgptOrder(e.target.value),\n                                    className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Contentのgptへの指示:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: content,\n                                        onChange: (e)=>setContent(e.target.value),\n                                        className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-2 border-gray-500 text-white mt-24\",\n                            onClick: ()=>{\n                                chatgptTitleSubmit(title);\n                            },\n                            children: \"Title ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-2 border-gray-500 text-white mt-24\",\n                            onClick: ()=>{\n                                chatgptContentSubmit(content);\n                            },\n                            children: \"Content ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(WriteNewBlogPost, \"o+23G0eiu7XQvq/eSvPH7h52UXw=\");\n_c = WriteNewBlogPost;\nvar _c;\n$RefreshReg$(_c, \"WriteNewBlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxnQkFBZ0JpQyxFQUFFQyxPQUFPSDtvQ0FDMUNSLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNJOzRCQUFNSixXQUFVOztnQ0FBb0I7OENBRWpDLDhEQUFDWTs4Q0FDQyw0RUFBQ047d0NBQ0RFLE9BQU9sQzt3Q0FDUG1DLFVBQVUsQ0FBQ0MsSUFBTW5DLFdBQVdtQyxFQUFFQyxPQUFPSDt3Q0FDckNSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVFsQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDeEMsOERBQUNhOzRCQUFPYixXQUFVOzRCQUE0Q2MsU0FBUztnQ0FBS3RCLG1CQUFtQnBCOzRCQUFNO3NDQUFHOzs7Ozs7c0NBQ3hHLDhEQUFDeUM7NEJBQU9iLFdBQVU7NEJBQTRDYyxTQUFTO2dDQUFLbEIscUJBQXFCdEI7NEJBQVE7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RIO0dBdEl3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvV3JpdGVOZXdCbG9nUG9zdC5qcz8xOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyaXRlTmV3QmxvZ1Bvc3QoKSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhdGdwdE9yZGVyLCBzZXRDaGF0Z3B0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0Z3B0VGl0bGVSZXNwb25zZSwgc2V0Q2hhdGdwdFRpdGxlUmVzcG9uc2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgY29udGVudCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdHMvXCIsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRUaXRsZShcIlwiKTtcbiAgICAgIHNldENvbnRlbnQoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwb3N0OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYXRncHRUaXRsZVN1Ym1pdCA9IGFzeW5jICh0aXRsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvY2hhdGdwdC8ke3RpdGxlfcKlbiR7Y2hhdGdwdE9yZGVyfWAgKyBcbiAgICAgICAgICBcIsKlbiDkuIrjga7lhoXlrrnjgavmsr/jgaPjgabjg5bjg63jgrDoqJjkuovjgafkvb/jgYbjgYTjgYTmhJ/jgZjjga7jgr/jgqTjg4jjg6vjgaDjgZHjgpLov5TjgZfjgabjgY/jgaDjgZXjgYRcIlxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldENoYXRncHRUaXRsZVJlc3BvbnNlKHJlcy5kYXRhKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoYXRncHRDb250ZW50U3VibWl0ID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvY2hhdGdwdC8ke2NvbnRlbnR9wqVuJHtjaGF0Z3B0T3JkZXJ9YCArIFxuICAgICAgICAgIFwiwqVuIOS4iuOBruWGheWuueOBq+ayv+OBo+OBpuODluODreOCsOiomOS6i+OBruWGheWuueOBoOOBkeOCkui/lOOBl+OBpuOBj+OBoOOBleOBhFwiXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0Q2hhdGdwdENvbnRlbnRSZXNwb25zZShyZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLjgZPjgozjga9jaGF0Z3B0VGl0bGVSZXNwb25zZeOBp+OBmVwiLGNoYXRncHRUaXRsZVJlc3BvbnNlKTtcbiAgICBzZXRUaXRsZShjaGF0Z3B0VGl0bGVSZXNwb25zZSk7XG4gIH0sIFtjaGF0Z3B0VGl0bGVSZXNwb25zZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLjgZPjgozjga9jaGF0Z3B0Q29udGVudFJlc3BvbnNl44Gn44GZXCIsY2hhdGdwdENvbnRlbnRSZXNwb25zZSk7XG4gICAgc2V0VGl0bGUoY2hhdGdwdFRpdGxlUmVzcG9uc2UpO1xuICB9LCBbY2hhdGdwdFRpdGxlUmVzcG9uc2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJCbG9nIHBhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgey8qIOW3puOBruimgee0oCAqL31cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwIG1iLTI0IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtNHhsXCI+Q3JlYXRlIGEgbmV3IHBvc3Q8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgbS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgVGl0bGU6XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS01MDAgYmctd2hpdGUgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgQ29udGVudDpcbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIGJnLXdoaXRlIGgtNjQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIOecn+OCk+S4reOBruimgee0oCAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC04IHRleHQteGxcIj5MZXQncyBDaGF0R1BUPC9oMT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgVGl0bGXjga5ncHTjgbjjga7mjIfnpLo6XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NoYXRncHRPcmRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoYXRncHRPcmRlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBiZy13aGl0ZSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIENvbnRlbnTjga5ncHTjgbjjga7mjIfnpLo6XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBiZy13aGl0ZSBoLTY0IHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgey8qIOWPs+OBruimgee0oCAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC04IHRleHQteGxcIj5MZXQncyBDaGF0R1BUPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXdoaXRlIG10LTI0XCIgb25DbGljaz17KCk9PntjaGF0Z3B0VGl0bGVTdWJtaXQodGl0bGUpfX0+VGl0bGUgQ2hhdEdQVDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHRleHQtd2hpdGUgbXQtMjRcIiBvbkNsaWNrPXsoKT0+e2NoYXRncHRDb250ZW50U3VibWl0KGNvbnRlbnQpfX0+Q29udGVudCBDaGF0R1BUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGF5b3V0IiwiV3JpdGVOZXdCbG9nUG9zdCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNoYXRncHRPcmRlciIsInNldENoYXRncHRPcmRlciIsImNoYXRncHRUaXRsZVJlc3BvbnNlIiwic2V0Q2hhdGdwdFRpdGxlUmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJjaGF0Z3B0VGl0bGVTdWJtaXQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2hhdGdwdENvbnRlbnRTdWJtaXQiLCJzZXRDaGF0Z3B0Q29udGVudFJlc3BvbnNlIiwiY2hhdGdwdENvbnRlbnRSZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJiciIsInRleHRhcmVhIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/WriteNewBlogPost.js\n"));

/***/ })

});