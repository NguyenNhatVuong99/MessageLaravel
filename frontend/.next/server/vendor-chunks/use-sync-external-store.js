"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-with-selector.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \nif (true) {\n    (function() {\n        \"use strict\";\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== \"undefined\" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === \"function\") {\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\n        }\n        var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n        /**\n * inlined Object.is polyfill to avoid requiring consumers ship their own\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n */ function is(x, y) {\n            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare\n            ;\n        }\n        var objectIs = typeof Object.is === \"function\" ? Object.is : is;\n        var useSyncExternalStore = React.useSyncExternalStore;\n        // for CommonJS interop.\n        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.\n        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {\n            // Use this to track the rendered snapshot.\n            var instRef = useRef(null);\n            var inst;\n            if (instRef.current === null) {\n                inst = {\n                    hasValue: false,\n                    value: null\n                };\n                instRef.current = inst;\n            } else {\n                inst = instRef.current;\n            }\n            var _useMemo = useMemo(function() {\n                // Track the memoized state using closure variables that are local to this\n                // memoized instance of a getSnapshot function. Intentionally not using a\n                // useRef hook, because that state would be shared across all concurrent\n                // copies of the hook/component.\n                var hasMemo = false;\n                var memoizedSnapshot;\n                var memoizedSelection;\n                var memoizedSelector = function(nextSnapshot) {\n                    if (!hasMemo) {\n                        // The first time the hook is called, there is no memoized result.\n                        hasMemo = true;\n                        memoizedSnapshot = nextSnapshot;\n                        var _nextSelection = selector(nextSnapshot);\n                        if (isEqual !== undefined) {\n                            // Even if the selector has changed, the currently rendered selection\n                            // may be equal to the new selection. We should attempt to reuse the\n                            // current value if possible, to preserve downstream memoizations.\n                            if (inst.hasValue) {\n                                var currentSelection = inst.value;\n                                if (isEqual(currentSelection, _nextSelection)) {\n                                    memoizedSelection = currentSelection;\n                                    return currentSelection;\n                                }\n                            }\n                        }\n                        memoizedSelection = _nextSelection;\n                        return _nextSelection;\n                    } // We may be able to reuse the previous invocation's result.\n                    // We may be able to reuse the previous invocation's result.\n                    var prevSnapshot = memoizedSnapshot;\n                    var prevSelection = memoizedSelection;\n                    if (objectIs(prevSnapshot, nextSnapshot)) {\n                        // The snapshot is the same as last time. Reuse the previous selection.\n                        return prevSelection;\n                    } // The snapshot has changed, so we need to compute a new selection.\n                    // The snapshot has changed, so we need to compute a new selection.\n                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data\n                    // has changed. If it hasn't, return the previous selection. That signals\n                    // to React that the selections are conceptually equal, and we can bail\n                    // out of rendering.\n                    // If a custom isEqual function is provided, use that to check if the data\n                    // has changed. If it hasn't, return the previous selection. That signals\n                    // to React that the selections are conceptually equal, and we can bail\n                    // out of rendering.\n                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {\n                        return prevSelection;\n                    }\n                    memoizedSnapshot = nextSnapshot;\n                    memoizedSelection = nextSelection;\n                    return nextSelection;\n                }; // Assigning this to a constant so that Flow knows it can't change.\n                // Assigning this to a constant so that Flow knows it can't change.\n                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;\n                var getSnapshotWithSelector = function() {\n                    return memoizedSelector(getSnapshot());\n                };\n                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {\n                    return memoizedSelector(maybeGetServerSnapshot());\n                };\n                return [\n                    getSnapshotWithSelector,\n                    getServerSnapshotWithSelector\n                ];\n            }, [\n                getSnapshot,\n                getServerSnapshot,\n                selector,\n                isEqual\n            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];\n            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);\n            useEffect(function() {\n                inst.hasValue = true;\n                inst.value = value;\n            }, [\n                value\n            ]);\n            useDebugValue(value);\n            return value;\n        }\n        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== \"undefined\" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === \"function\") {\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\n        }\n    })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMsR0FFRDtBQUVBLElBQUlBLElBQXFDLEVBQUU7SUFDeEM7UUFFTztRQUVWLHlDQUF5QyxHQUN6QyxJQUNFLE9BQU9DLG1DQUFtQyxlQUMxQyxPQUFPQSwrQkFBK0JDLDJCQUEyQixLQUMvRCxZQUNGO1lBQ0FELCtCQUErQkMsMkJBQTJCLENBQUMsSUFBSUM7UUFDakU7UUFDVSxJQUFJQyxRQUFRQyxtQkFBT0EsQ0FBQztRQUU5Qjs7O0NBR0MsR0FDRCxTQUFTQyxHQUFHQyxDQUFDLEVBQUVDLENBQUM7WUFDZCxPQUFPRCxNQUFNQyxLQUFNRCxDQUFBQSxNQUFNLEtBQUssSUFBSUEsTUFBTSxJQUFJQyxDQUFBQSxLQUFNRCxNQUFNQSxLQUFLQyxNQUFNQSxFQUFFLHNDQUFzQzs7UUFFN0c7UUFFQSxJQUFJQyxXQUFXLE9BQU9DLE9BQU9KLEVBQUUsS0FBSyxhQUFhSSxPQUFPSixFQUFFLEdBQUdBO1FBRTdELElBQUlLLHVCQUF1QlAsTUFBTU8sb0JBQW9CO1FBRXJELHdCQUF3QjtRQUV4QixJQUFJQyxTQUFTUixNQUFNUSxNQUFNLEVBQ3JCQyxZQUFZVCxNQUFNUyxTQUFTLEVBQzNCQyxVQUFVVixNQUFNVSxPQUFPLEVBQ3ZCQyxnQkFBZ0JYLE1BQU1XLGFBQWEsRUFBRSw2RUFBNkU7UUFFdEgsU0FBU0MsaUNBQWlDQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsaUJBQWlCLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztZQUNwRywyQ0FBMkM7WUFDM0MsSUFBSUMsVUFBVVYsT0FBTztZQUNyQixJQUFJVztZQUVKLElBQUlELFFBQVFFLE9BQU8sS0FBSyxNQUFNO2dCQUM1QkQsT0FBTztvQkFDTEUsVUFBVTtvQkFDVkMsT0FBTztnQkFDVDtnQkFDQUosUUFBUUUsT0FBTyxHQUFHRDtZQUNwQixPQUFPO2dCQUNMQSxPQUFPRCxRQUFRRSxPQUFPO1lBQ3hCO1lBRUEsSUFBSUcsV0FBV2IsUUFBUTtnQkFDckIsMEVBQTBFO2dCQUMxRSx5RUFBeUU7Z0JBQ3pFLHdFQUF3RTtnQkFDeEUsZ0NBQWdDO2dCQUNoQyxJQUFJYyxVQUFVO2dCQUNkLElBQUlDO2dCQUNKLElBQUlDO2dCQUVKLElBQUlDLG1CQUFtQixTQUFVQyxZQUFZO29CQUMzQyxJQUFJLENBQUNKLFNBQVM7d0JBQ1osa0VBQWtFO3dCQUNsRUEsVUFBVTt3QkFDVkMsbUJBQW1CRzt3QkFFbkIsSUFBSUMsaUJBQWlCYixTQUFTWTt3QkFFOUIsSUFBSVgsWUFBWWEsV0FBVzs0QkFDekIscUVBQXFFOzRCQUNyRSxvRUFBb0U7NEJBQ3BFLGtFQUFrRTs0QkFDbEUsSUFBSVgsS0FBS0UsUUFBUSxFQUFFO2dDQUNqQixJQUFJVSxtQkFBbUJaLEtBQUtHLEtBQUs7Z0NBRWpDLElBQUlMLFFBQVFjLGtCQUFrQkYsaUJBQWlCO29DQUM3Q0gsb0JBQW9CSztvQ0FDcEIsT0FBT0E7Z0NBQ1Q7NEJBQ0Y7d0JBQ0Y7d0JBRUFMLG9CQUFvQkc7d0JBQ3BCLE9BQU9BO29CQUNULEVBQUUsNERBQTREO29CQUc5RCw0REFBNEQ7b0JBQzVELElBQUlHLGVBQWVQO29CQUNuQixJQUFJUSxnQkFBZ0JQO29CQUVwQixJQUFJckIsU0FBUzJCLGNBQWNKLGVBQWU7d0JBQ3hDLHVFQUF1RTt3QkFDdkUsT0FBT0s7b0JBQ1QsRUFBRSxtRUFBbUU7b0JBR3JFLG1FQUFtRTtvQkFDbkUsSUFBSUMsZ0JBQWdCbEIsU0FBU1ksZUFBZSwwRUFBMEU7b0JBQ3RILHlFQUF5RTtvQkFDekUsdUVBQXVFO29CQUN2RSxvQkFBb0I7b0JBRXBCLDBFQUEwRTtvQkFDMUUseUVBQXlFO29CQUN6RSx1RUFBdUU7b0JBQ3ZFLG9CQUFvQjtvQkFDcEIsSUFBSVgsWUFBWWEsYUFBYWIsUUFBUWdCLGVBQWVDLGdCQUFnQjt3QkFDbEUsT0FBT0Q7b0JBQ1Q7b0JBRUFSLG1CQUFtQkc7b0JBQ25CRixvQkFBb0JRO29CQUNwQixPQUFPQTtnQkFDVCxHQUFHLG1FQUFtRTtnQkFHdEUsbUVBQW1FO2dCQUNuRSxJQUFJQyx5QkFBeUJwQixzQkFBc0JlLFlBQVksT0FBT2Y7Z0JBRXRFLElBQUlxQiwwQkFBMEI7b0JBQzVCLE9BQU9ULGlCQUFpQmI7Z0JBQzFCO2dCQUVBLElBQUl1QixnQ0FBZ0NGLDJCQUEyQixPQUFPTCxZQUFZO29CQUNoRixPQUFPSCxpQkFBaUJRO2dCQUMxQjtnQkFDQSxPQUFPO29CQUFDQztvQkFBeUJDO2lCQUE4QjtZQUNqRSxHQUFHO2dCQUFDdkI7Z0JBQWFDO2dCQUFtQkM7Z0JBQVVDO2FBQVEsR0FDbERxQixlQUFlZixRQUFRLENBQUMsRUFBRSxFQUMxQmdCLHFCQUFxQmhCLFFBQVEsQ0FBQyxFQUFFO1lBRXBDLElBQUlELFFBQVFmLHFCQUFxQk0sV0FBV3lCLGNBQWNDO1lBQzFEOUIsVUFBVTtnQkFDUlUsS0FBS0UsUUFBUSxHQUFHO2dCQUNoQkYsS0FBS0csS0FBSyxHQUFHQTtZQUNmLEdBQUc7Z0JBQUNBO2FBQU07WUFDVlgsY0FBY1c7WUFDZCxPQUFPQTtRQUNUO1FBRUFrQix3Q0FBd0MsR0FBRzVCO1FBQ2pDLHlDQUF5QyxHQUNuRCxJQUNFLE9BQU9mLG1DQUFtQyxlQUMxQyxPQUFPQSwrQkFBK0I0QywwQkFBMEIsS0FDOUQsWUFDRjtZQUNBNUMsK0JBQStCNEMsMEJBQTBCLENBQUMsSUFBSTFDO1FBQ2hFO0lBRUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRpbmdfYXBwLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzPzM4MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuXG4vLyBmb3IgQ29tbW9uSlMgaW50ZXJvcC5cblxudmFyIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7IC8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbCkge1xuICAvLyBVc2UgdGhpcyB0byB0cmFjayB0aGUgcmVuZGVyZWQgc25hcHNob3QuXG4gIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5zdDtcblxuICBpZiAoaW5zdFJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgaW5zdCA9IHtcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICB9IGVsc2Uge1xuICAgIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gIH1cblxuICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUcmFjayB0aGUgbWVtb2l6ZWQgc3RhdGUgdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMgdGhhdCBhcmUgbG9jYWwgdG8gdGhpc1xuICAgIC8vIG1lbW9pemVkIGluc3RhbmNlIG9mIGEgZ2V0U25hcHNob3QgZnVuY3Rpb24uIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGFcbiAgICAvLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbiAgICAvLyBjb3BpZXMgb2YgdGhlIGhvb2svY29tcG9uZW50LlxuICAgIHZhciBoYXNNZW1vID0gZmFsc2U7XG4gICAgdmFyIG1lbW9pemVkU25hcHNob3Q7XG4gICAgdmFyIG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgdmFyIG1lbW9pemVkU2VsZWN0b3IgPSBmdW5jdGlvbiAobmV4dFNuYXBzaG90KSB7XG4gICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIGhvb2sgaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBtZW1vaXplZCByZXN1bHQuXG4gICAgICAgIGhhc01lbW8gPSB0cnVlO1xuICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuXG4gICAgICAgIHZhciBfbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG5cbiAgICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHNlbGVjdG9yIGhhcyBjaGFuZ2VkLCB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHNlbGVjdGlvblxuICAgICAgICAgIC8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCB2YWx1ZSBpZiBwb3NzaWJsZSwgdG8gcHJlc2VydmUgZG93bnN0cmVhbSBtZW1vaXphdGlvbnMuXG4gICAgICAgICAgaWYgKGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgX25leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBfbmV4dFNlbGVjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9uZXh0U2VsZWN0aW9uO1xuICAgICAgfSAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cblxuXG4gICAgICAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cbiAgICAgIHZhciBwcmV2U25hcHNob3QgPSBtZW1vaXplZFNuYXBzaG90O1xuICAgICAgdmFyIHByZXZTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgICAgaWYgKG9iamVjdElzKHByZXZTbmFwc2hvdCwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAvLyBUaGUgc25hcHNob3QgaXMgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLiBSZXVzZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH0gLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuXG5cbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cbiAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTsgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuXG4gICAgICAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG4gICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkICYmIGlzRXF1YWwocHJldlNlbGVjdGlvbiwgbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IG5leHRTZWxlY3Rpb247XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdGlvbjtcbiAgICB9OyAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG5cblxuICAgIC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cbiAgICB2YXIgbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9IGdldFNlcnZlclNuYXBzaG90ID09PSB1bmRlZmluZWQgPyBudWxsIDogZ2V0U2VydmVyU25hcHNob3Q7XG5cbiAgICB2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yID0gbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKG1heWJlR2V0U2VydmVyU25hcHNob3QoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLCBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcl07XG4gIH0sIFtnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsXSksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlTWVtb1swXSxcbiAgICAgIGdldFNlcnZlclNlbGVjdGlvbiA9IF91c2VNZW1vWzFdO1xuXG4gIHZhciB2YWx1ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U2VsZWN0aW9uLCBnZXRTZXJ2ZXJTZWxlY3Rpb24pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQiLCJFcnJvciIsIlJlYWN0IiwicmVxdWlyZSIsImlzIiwieCIsInkiLCJvYmplY3RJcyIsIk9iamVjdCIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZURlYnVnVmFsdWUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZ2V0U2VydmVyU25hcHNob3QiLCJzZWxlY3RvciIsImlzRXF1YWwiLCJpbnN0UmVmIiwiaW5zdCIsImN1cnJlbnQiLCJoYXNWYWx1ZSIsInZhbHVlIiwiX3VzZU1lbW8iLCJoYXNNZW1vIiwibWVtb2l6ZWRTbmFwc2hvdCIsIm1lbW9pemVkU2VsZWN0aW9uIiwibWVtb2l6ZWRTZWxlY3RvciIsIm5leHRTbmFwc2hvdCIsIl9uZXh0U2VsZWN0aW9uIiwidW5kZWZpbmVkIiwiY3VycmVudFNlbGVjdGlvbiIsInByZXZTbmFwc2hvdCIsInByZXZTZWxlY3Rpb24iLCJuZXh0U2VsZWN0aW9uIiwibWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCIsImdldFNuYXBzaG90V2l0aFNlbGVjdG9yIiwiZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IiLCJnZXRTZWxlY3Rpb24iLCJnZXRTZXJ2ZXJTZWxlY3Rpb24iLCJleHBvcnRzIiwicmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMQywrTUFBeUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0aW5nX2FwcC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzPzdlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/with-selector.js\n");

/***/ })

};
;