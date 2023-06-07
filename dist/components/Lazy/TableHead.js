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
const TableHeadItem = _ref => {
  let {
    onSort,
    accessor,
    item,
    sortable
  } = _ref;
  const [sortField, setSortField] = (0, _react.useState)(null);
  const [sortOrder, setSortOrder] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    onSort({
      sortField: sortField,
      sortOrder: sortOrder
    });
  }, [sortField, sortOrder]);
  const handleSort = () => {
    if (!sortable) {
      return;
    }
    setSortField(accessor);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return /*#__PURE__*/_react.default.createElement("td", {
    className: sortable ? "Columns Columns-".concat(accessor, " Columns-Sortable") : "Columns Columns-".concat(accessor),
    title: item,
    onClick: handleSort
  }, " ", item, " ");
};
var _default = TableHeadItem;
exports.default = _default;