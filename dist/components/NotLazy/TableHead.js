"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * <Component Head Table with sortable Columns (not lazy load)>
 * @param   {state} { accessor, item, handleSorting, sortable, setPage, infiniteScroll  }
 * @return  { header component and new order}  Order update 
 */

const TableHeadItem = _ref => {
  let {
    accessor,
    item,
    handleSorting,
    sortable,
    setPage,
    infiniteScroll
  } = _ref;
  const [sortField, setSortField] = (0, _react.useState)("");
  const [order, setOrder] = (0, _react.useState)("asc");
  const handleSortingChange = accessor => {
    const sortOrder = accessor == sortField && order == "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    if (infiniteScroll) {
      setPage(1);
    }
  };
  return /*#__PURE__*/_react.default.createElement("td", {
    className: sortable ? "Columns Columns-".concat(accessor, " Columns-Sortable") : "Columns Columns-".concat(accessor),
    title: item,
    onClick: sortable ? () => handleSortingChange(accessor) : null
  }, item);
};
var _default = TableHeadItem;
exports.default = _default;