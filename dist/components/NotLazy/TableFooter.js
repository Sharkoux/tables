"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * < Component Footer, if pagination (notLazy load)>
 * @param   {state} { range, setPage, page, pagination, data } State for update page
 * @return  {Component footer}  Two button for next and previous page
 */

const TableFooter = _ref => {
  let {
    range,
    setPage,
    page,
    pagination,
    data
  } = _ref;
  (0, _react.useEffect)(() => {
    if (page < 1) {
      setPage(1);
    }
    if (page >= range.length) {
      setPage(range.length);
    }
  }, [page, setPage, data]);
  return /*#__PURE__*/_react.default.createElement("div", null, pagination ? /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setPage(page - 1)
  }, "Previous"), /*#__PURE__*/_react.default.createElement("p", null, page), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setPage(page + 1)
  }, "Next")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
};
var _default = TableFooter;
exports.default = _default;