"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/change/[rewriteid]",{

/***/ "./src/pages/blog/change/[rewriteid].js":
/*!**********************************************!*\
  !*** ./src/pages/blog/change/[rewriteid].js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ReWrite; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ENDPOINT = \"http://127.0.0.1:8000/api/posts/\";\nvar __N_SSG = true;\nfunction ReWrite(param) {\n    let { article } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(article.title));\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(article.content));\n    const [firstView, setFirstView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"\".concat(ENDPOINT).concat(article.id, \"/\"), formData);\n            setFirstView(false);\n            console.log(response.data);\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            title: \"Blog page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-3xl p-8\",\n                children: [\n                    \"ID = \",\n                    article.id,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"w-6/2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-xl p-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: article.content,\n                                    onChange: (e)=>setContent(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"border-2 border-gray-500 text-white rounded-full\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ReWrite, \"cK2kXkqYLwOp4mFINTGezVJIMkQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ReWrite;\nvar _c;\n$RefreshReg$(_c, \"ReWrite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9jaGFuZ2UvW3Jld3JpdGVpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDZDtBQUNlO0FBQ1I7QUFFakMsTUFBTU0sV0FBVzs7QUFFRixTQUFTQyxRQUFRLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDs7SUFDOUIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxHQUFpQixPQUFkRyxRQUFRRTtJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsR0FBbUIsT0FBaEJHLFFBQVFJO0lBQ2xELE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQztRQUVOLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE9BQU8sU0FBU1g7UUFDekJTLFNBQVNFLE9BQU8sV0FBV1Q7UUFFM0IsSUFBSTtZQUNGLE1BQU1VLFdBQVcsTUFBTW5CLGlEQUFTb0IsQ0FBQyxHQUFjZixPQUFYRixVQUFzQixPQUFYRSxRQUFRZ0IsSUFBRyxNQUFJTDtZQUU5REosYUFBYTtZQUNiVSxRQUFRQyxJQUFJSixTQUFTSztRQUN2QixFQUFFLE9BQU9DLE9BQU87WUFDZEgsUUFBUUcsTUFBTSx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxJQUFJbkIsT0FBT29CLFlBQVk7UUFDckIscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZDtJQUdBLHFCQUNFO2tCQUNFLDRFQUFDMUIsMERBQU1BO1lBQUNNLE9BQU07c0JBQ1osNEVBQUNvQjtnQkFBSUMsV0FBVTs7b0JBQTBDO29CQUNqRHZCLFFBQVFnQjtrQ0FDZCw4REFBQ1E7d0JBQUtDLFVBQVVqQjs7MENBQ2QsOERBQUNrQjtnQ0FBTUMsT0FBT3pCO2dDQUFPMEIsVUFBVSxDQUFDQyxJQUFNMUIsU0FBUzBCLEVBQUVDLE9BQU9IO2dDQUFRSixXQUFVOzs7Ozs7MENBRTFFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1E7b0NBQ0NKLE9BQU8zQixRQUFRSTtvQ0FDZndCLFVBQVUsQ0FBQ0MsSUFBTXhCLFdBQVd3QixFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7MENBR3pDLDhEQUFDSztnQ0FDQ0MsTUFBSztnQ0FDTFYsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FyRHdCeEI7O1FBQ1BMLGtEQUFTQTs7O0tBREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nL2NoYW5nZS9bcmV3cml0ZWlkXS5qcz8wNjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcG9zdHMvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlV3JpdGUoeyBhcnRpY2xlIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoYCR7YXJ0aWNsZS50aXRsZX1gKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoYCR7YXJ0aWNsZS5jb250ZW50fWApO1xuICBjb25zdCBbZmlyc3RWaWV3LCBzZXRGaXJzdFZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgY29udGVudCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlR9JHthcnRpY2xlLmlkfS9gLCBmb3JtRGF0YSk7XG5cbiAgICAgIHNldEZpcnN0VmlldyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHBvc3Q6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCB0aXRsZT1cIkJsb2cgcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtM3hsIHAtOFwiPlxuICAgICAgICAgIElEID0ge2FydGljbGUuaWR9XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy02LzJcIi8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHAtOFwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17YXJ0aWNsZS5jb250ZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKEVORFBPSU5UKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICBpZiAoIXJlc3VsdCkgcmV0dXJuO1xuXG4gIC8v44Ki44Kv44K744K544OR44K544GL44KJcmV3cml0ZWlk44GM44Kt44Oj44OD44OB44GV44KM44KLXG4gIGNvbnN0IHBhdGhzID0gcmVzdWx0Lm1hcCgoYXJ0aWNsZSkgPT4gKHtcbiAgICBwYXJhbXM6IHsgcmV3cml0ZWlkOiBgJHthcnRpY2xlLmlkfWAgfSxcbiAgfSkpO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke0VORFBPSU5UfSR7cGFyYW1zLnJld3JpdGVpZH1gKS50aGVuKChyZXMpID0+XG4gICAgcmVzLmpzb24oKVxuICApO1xuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICByZXR1cm4geyBwcm9wczogeyBhcnRpY2xlOiByZXN1bHQgfSB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJMYXlvdXQiLCJ1c2VTdGF0ZSIsIkVORFBPSU5UIiwiUmVXcml0ZSIsImFydGljbGUiLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJmaXJzdFZpZXciLCJzZXRGaXJzdFZpZXciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwicHV0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiaXNGYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/change/[rewriteid].js\n"));

/***/ })

});