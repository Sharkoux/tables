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
 * <Component Cell>
 * @param   {state} { data, accessor} state for cell data and className
 * @return  {Component Cell}  
 */

const TableCell = _ref => {
  let {
    data,
    accessor,
    cell
  } = _ref;
  const tData = data[accessor] ? data[accessor] : null;
  if (cell) {
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "cell cell-".concat(accessor),
      key: accessor
    }, cell({
      value: tData,
      row: data
    }));
  }
  return /*#__PURE__*/_react.default.createElement("td", {
    className: "cell cell-".concat(accessor),
    key: accessor
  }, tData);
};
var _default = TableCell;
exports.default = _default;