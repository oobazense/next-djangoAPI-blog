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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WriteNewBlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WriteNewBlogPost() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptOrder, setChatgptOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatgptResponse, setChatgptResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/api/posts/\", formData);\n            console.log(response.data);\n            setTitle(\"\");\n            setContent(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    const chatgptSubmit = async (title)=>{\n        console.log(title);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/api/chatgpt/\".concat(title) + \"\\xa5n 上の内容に沿ってブログ記事で使ういい感じのタイトルだけを返してください\").then((res)=>{\n            console.log(res.data);\n            setChatgptResponse(res.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"これはchatgptResponseです\", chatgptResponse);\n        setTitle(chatgptResponse);\n    }, [\n        chatgptResponse\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Blog page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full grid grid-cols-3 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-green-400 mb-24 flex flex-col items-center text-4xl\",\n                            children: \"Create a new post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"flex flex-col items-start m-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Title:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            type: \"text\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-white w-full\",\n                                    children: [\n                                        \"Content:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: content,\n                                                onChange: (e)=>setContent(e.target.value),\n                                                className: \"w-full border-2 border-gray-500 bg-white h-64 text-black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"border-2 border-gray-500 text-white\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-white w-full\",\n                            children: [\n                                \"Titleのgptへの指示:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    type: \"text\",\n                                    value: chatgptOrder,\n                                    onChange: (e)=>setChatgptOrder(e.target.value),\n                                    className: \"w-full border-2 border-gray-500 bg-white text-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mt-8 text-xl\",\n                            children: \"Let's ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-2 border-gray-500 text-white mt-24\",\n                            onClick: ()=>{\n                                chatgptSubmit(title);\n                            },\n                            children: \"Title ChatGPT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/WriteNewBlogPost.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(WriteNewBlogPost, \"Cjl2zFjjCMp1+o27QbS3o6o/ugU=\");\n_c = WriteNewBlogPost;\nvar _c;\n$RefreshReg$(_c, \"WriteNewBlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3BhZ2VzL2Jsb2cvV3JpdGVOZXdCbG9nUG9zdC5qcz8xOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyaXRlTmV3QmxvZ1Bvc3QoKSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhdGdwdE9yZGVyLCBzZXRDaGF0Z3B0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0Z3B0UmVzcG9uc2UsIHNldENoYXRncHRSZXNwb25zZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBjb250ZW50KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0cy9cIixcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldFRpdGxlKFwiXCIpO1xuICAgICAgc2V0Q29udGVudChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHBvc3Q6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhdGdwdFN1Ym1pdCA9IGFzeW5jICh0aXRsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvY2hhdGdwdC8ke3RpdGxlfWAgKyBcbiAgICAgICAgICBcIsKlbiDkuIrjga7lhoXlrrnjgavmsr/jgaPjgabjg5bjg63jgrDoqJjkuovjgafkvb/jgYbjgYTjgYTmhJ/jgZjjga7jgr/jgqTjg4jjg6vjgaDjgZHjgpLov5TjgZfjgabjgY/jgaDjgZXjgYRcIlxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldENoYXRncHRSZXNwb25zZShyZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuOBk+OCjOOBr2NoYXRncHRSZXNwb25zZeOBp+OBmVwiLGNoYXRncHRSZXNwb25zZSk7XG4gICAgc2V0VGl0bGUoY2hhdGdwdFJlc3BvbnNlKTtcbiAgfSwgW2NoYXRncHRSZXNwb25zZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkJsb2cgcGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7Lyog5bem44Gu6KaB57SgICovfVxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDAgbWItMjQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC00eGxcIj5DcmVhdGUgYSBuZXcgcG9zdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBtLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPlxuICAgICAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBiZy13aGl0ZSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPlxuICAgICAgICAgICAgICBDb250ZW50OlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS01MDAgYmctd2hpdGUgaC02NCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Lyog55yf44KT5Lit44Gu6KaB57SgICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG10LTggdGV4dC14bFwiPkxldCdzIENoYXRHUFQ8L2gxPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPlxuICAgICAgICAgICAgICBUaXRsZeOBrmdwdOOBuOOBruaMh+ekujpcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhdGdwdE9yZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hhdGdwdE9yZGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIGJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiDlj7Pjga7opoHntKAgKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXQtOCB0ZXh0LXhsXCI+TGV0J3MgQ2hhdEdQVDwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgdGV4dC13aGl0ZSBtdC0yNFwiIG9uQ2xpY2s9eygpPT57Y2hhdGdwdFN1Ym1pdCh0aXRsZSl9fT5UaXRsZSBDaGF0R1BUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGF5b3V0IiwiV3JpdGVOZXdCbG9nUG9zdCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNoYXRncHRPcmRlciIsInNldENoYXRncHRPcmRlciIsImNoYXRncHRSZXNwb25zZSIsInNldENoYXRncHRSZXNwb25zZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImNoYXRncHRTdWJtaXQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImJyIiwidGV4dGFyZWEiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/WriteNewBlogPost.js\n"));

/***/ })

});