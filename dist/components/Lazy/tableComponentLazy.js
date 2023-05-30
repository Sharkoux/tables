"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _TableHead = _interopRequireDefault(require("./TableHead"));
var _TableRow = _interopRequireDefault(require("../TableRow"));
var _TableFooter = _interopRequireDefault(require("./TableFooter"));
var _useDraggable = _interopRequireDefault(require("../hook/useDraggable"));
var _useInfiniteScroll = require("../hook/useInfiniteScroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * <Component Table for lazy version>
 * @param  {state} { lazy, first, draggable, input, allUser, Columns, Data, customClass, rows, pagination, infiniteScroll, page } State
 * @param  {fonction} { onSearch, onSort, onPage } function state update
 * @return {component Table with header, rows and footer}  Dispatch function and state to children
 */

const TableLazy = _ref => {
  let {
    lazy,
    first,
    draggable,
    input,
    onSearch,
    onSort,
    allUser,
    onPage,
    Columns,
    Data,
    customClass,
    rows,
    pagination,
    infiniteScroll,
    page
  } = _ref;
  const [search, setSearch] = (0, _react.useState)(null);

  //init hook for infiniteScroll and Drag/Drop
  (0, _useInfiniteScroll.useInfiniteScroll)(lazy, first, infiniteScroll, allUser, rows, onPage, page);
  const [dataRow, onDragStart, onDragOver, onDrop] = (0, _useDraggable.default)(Data, draggable);

  //function search 
  const handleSearch = e => {
    setSearch(e.target.value);
  };

  //event for onSearch function, modification state
  (0, _react.useEffect)(() => {
    onSearch({
      search: search
    });
  }, [search]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input ? /*#__PURE__*/_react.default.createElement("input", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.input,
    onChange: handleSearch
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("table", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.table
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.thead
  }, /*#__PURE__*/_react.default.createElement("tr", null, Columns.map((_ref2, index) => {
    let {
      header,
      accessor,
      sortable
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_TableHead.default, {
      onSort: onSort,
      key: index,
      item: header,
      accessor: accessor,
      sortable: sortable,
      customClass: customClass,
      infiniteScroll: infiniteScroll
    });
  }))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.tbody
  }, dataRow === Data ? Data === null || Data === void 0 ? void 0 : Data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: index,
      data: item,
      Columns: Columns,
      index: index,
      onDragStart: onDragStart,
      onDragOver: onDragOver,
      onDrop: onDrop
    });
  }) : dataRow === null || dataRow === void 0 ? void 0 : dataRow.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: index,
      data: item,
      Columns: Columns,
      index: index,
      onDragStart: onDragStart,
      onDragOver: onDragOver,
      onDrop: onDrop
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    id: "scrollAnchor",
    style: infiniteScroll ? {
      display: 'flex'
    } : {
      display: 'none'
    }
  }, "...loading"), /*#__PURE__*/_react.default.createElement(_TableFooter.default, {
    first: first,
    allUser: allUser,
    onPage: onPage,
    rows: rows,
    pagination: pagination,
    data: Data,
    page: page
  }));
};
var _default = TableLazy;
exports.default = _default;