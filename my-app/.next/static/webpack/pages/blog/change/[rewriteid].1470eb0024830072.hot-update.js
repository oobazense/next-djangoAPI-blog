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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ReWrite; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ENDPOINT = \"http://127.0.0.1:8000/api/posts/\";\nvar __N_SSG = true;\nfunction ReWrite(param) {\n    let { article } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(article.title));\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(article.content));\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", content);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"\".concat(ENDPOINT).concat(article.id, \"/\"), formData);\n            console.log(response.data);\n            setTitle(\"\");\n        } catch (error) {\n            console.error(\"Error creating post:\", error);\n        }\n    };\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        title\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            title: \"Blog page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-3xl p-8\",\n                children: [\n                    \"ID = \",\n                    article.id,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-4xl p-8\",\n                        children: article.title\n                    }, void 0, false, {\n                        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-xl p-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    dangerouslySetInnerHTML: {\n                                        __html: article.content\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"border-2 border-gray-500 text-white rounded-full\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/murayamakatsutoshi/Downloads/next-django-blog/my-app/src/pages/blog/change/[rewriteid].js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ReWrite, \"3+2JVZOt29VjKHBVMTDeFjIaaW0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ReWrite;\nvar _c;\n$RefreshReg$(_c, \"ReWrite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9jaGFuZ2UvW3Jld3JpdGVpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDZDtBQUNlO0FBQ1I7QUFFakMsTUFBTU0sV0FBVzs7QUFFRixTQUFTQyxRQUFRLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDs7SUFDOUIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxHQUFpQixPQUFkRyxRQUFRRTtJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsR0FBbUIsT0FBaEJHLFFBQVFJO0lBRWxELE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DO1FBRU4sTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsT0FBTyxTQUFTVDtRQUN6Qk8sU0FBU0UsT0FBTyxXQUFXUDtRQUUzQixJQUFJO1lBQ0YsTUFBTVEsV0FBVyxNQUFNakIsaURBQVNrQixDQUFDLEdBQWNiLE9BQVhGLFVBQXNCLE9BQVhFLFFBQVFjLElBQUcsTUFBSUw7WUFFOURNLFFBQVFDLElBQUlKLFNBQVNLO1lBQ3JCZCxTQUFTO1FBQ1gsRUFBRSxPQUFPZSxPQUFPO1lBQ2RILFFBQVFHLE1BQU0sd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsSUFBSWpCLE9BQU9rQixZQUFZO1FBQ3JCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQTNCLGdEQUFTQSxDQUFDLEtBQU8sR0FBRztRQUFDUztLQUFPO0lBRTVCLHFCQUNFO2tCQUNFLDRFQUFDTiwwREFBTUE7WUFBQ00sT0FBTTtzQkFDWiw0RUFBQ2tCO2dCQUFJQyxXQUFVOztvQkFBMEM7b0JBQ2pEckIsUUFBUWM7a0NBQ2QsOERBQUNRO3dCQUFHRCxXQUFVO2tDQUEyQnJCLFFBQVFFOzs7Ozs7a0NBQ2pELDhEQUFDcUI7d0JBQUtDLFVBQVVsQjs7MENBQ2QsOERBQUNtQjtnQ0FBTUMsT0FBT3hCO2dDQUFPeUIsVUFBVSxDQUFDQyxJQUFNekIsU0FBU3lCLEVBQUVDLE9BQU9IOzs7Ozs7MENBRXhELDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlVLHlCQUF5Qjt3Q0FBRUMsUUFBUS9CLFFBQVFJO29DQUFROzs7Ozs7Ozs7OzswQ0FFMUQsOERBQUM0QjtnQ0FDQ0MsTUFBSztnQ0FDTFosV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FuRHdCdEI7O1FBQ1BMLGtEQUFTQTs7O0tBREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nL2NoYW5nZS9bcmV3cml0ZWlkXS5qcz8wNjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcG9zdHMvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlV3JpdGUoeyBhcnRpY2xlIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoYCR7YXJ0aWNsZS50aXRsZX1gKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoYCR7YXJ0aWNsZS5jb250ZW50fWApO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIGNvbnRlbnQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UfSR7YXJ0aWNsZS5pZH0vYCwgZm9ybURhdGEpO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldFRpdGxlKFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcG9zdDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbdGl0bGUsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCB0aXRsZT1cIkJsb2cgcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtM3hsIHAtOFwiPlxuICAgICAgICAgIElEID0ge2FydGljbGUuaWR9XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGwgcC04XCI+e2FydGljbGUudGl0bGV9PC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBwLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydGljbGUuY29udGVudCB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChFTkRQT0lOVCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICAvL+OCouOCr+OCu+OCueODkeOCueOBi+OCiXJld3JpdGVpZOOBjOOCreODo+ODg+ODgeOBleOCjOOCi1xuICBjb25zdCBwYXRocyA9IHJlc3VsdC5tYXAoKGFydGljbGUpID0+ICh7XG4gICAgcGFyYW1zOiB7IHJld3JpdGVpZDogYCR7YXJ0aWNsZS5pZH1gIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtFTkRQT0lOVH0ke3BhcmFtcy5yZXdyaXRlaWR9YCkudGhlbigocmVzKSA9PlxuICAgIHJlcy5qc29uKClcbiAgKTtcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgYXJ0aWNsZTogcmVzdWx0IH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiTGF5b3V0IiwidXNlU3RhdGUiLCJFTkRQT0lOVCIsIlJlV3JpdGUiLCJhcnRpY2xlIiwicm91dGVyIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsInB1dCIsImlkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImlzRmFsbGJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/change/[rewriteid].js\n"));

/***/ })

});