"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TableCell = _interopRequireDefault(require("./TableCell"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * <Component Row with draggable function>
 * @param   {state} { data, columns, index, isTarget} State for map Cell component
 * @param   {function} { onDragStart, onDragOver, onDrop} Function for drag and drop
 * @return  {Component Cell}  Displays cell and calls functions to manage drag and drop
 */

const TableRow = _ref => {
  let {
    data,
    Columns,
    index,
    onDragStart: _onDragStart,
    onDragOver: _onDragOver,
    onDrop,
    isTarget
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("tr", {
    onDragStart: () => _onDragStart(index),
    onDragOver: () => _onDragOver(index),
    onDrop: onDrop,
    draggable: true,
    className: "rows rows-".concat(index)
  }, Columns.map(_ref2 => {
    let {
      accessor
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      data: data,
      accessor: accessor,
      key: accessor,
      index: index
    });
  }));
};
var _default = TableRow;
exports.default = _default;