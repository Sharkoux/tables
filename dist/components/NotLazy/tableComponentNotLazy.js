"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _TableHead = _interopRequireDefault(require("./TableHead"));
var _TableRow = _interopRequireDefault(require("../TableRow"));
var _TableFooter = _interopRequireDefault(require("./TableFooter"));
var _useSortNotLazy = require("../hook/useSortNotLazy");
var _useSearch = require("../hook/useSearch");
var _useInfiniteScroll = require("../hook/useInfiniteScroll");
var _useDraggable = _interopRequireDefault(require("../hook/useDraggable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * <Function for calcul range>
 * @param  {array} Data All data 
 * @param  {string} rows State rows
 * @return {range}  
 */

const calculRange = (Data, rows) => {
  const range = Array(Math.ceil((Data === null || Data === void 0 ? void 0 : Data.length) / rows)).fill(0).map((item, index) => index + 1);
  return range;
};

/**
 * <Component Table without lazy load>
 * @param  {state} {lazy, Columns, Data, customClass, rows, search, pagination, infiniteScroll } state
 * @return {component Table with header, rows and footer}  Dispatch function and state to children
 */

const TableNotLazy = _ref => {
  let {
    lazy,
    Columns,
    Data,
    customClass,
    rows,
    search,
    pagination,
    infiniteScroll
  } = _ref;
  const [range, setRange] = (0, _react.useState)(calculRange(Data, rows));
  const [page, setPage] = (0, _react.useState)(1);
  const [allData, setAllData] = (0, _react.useState)();
  const [data, setData] = (0, _react.useState)([]);
  const [newDatas, setNewData] = (0, _react.useState)();

  //Init Hook for infinite Scroll, search, sort, drag and drop
  (0, _useInfiniteScroll.useInfiniteScroll)(lazy, '', infiniteScroll, '', '', '', range, setPage, page);
  const filteredResults = (0, _useSearch.useSearch)(Data, search);
  const [tableData, handleSorting] = (0, _useSortNotLazy.useSort)(filteredResults !== null && filteredResults !== void 0 && filteredResults.length ? filteredResults : Data);
  const [dataRow, onDragStart, onDragOver, onDrop, isDragging] = (0, _useDraggable.default)(data, rows, page, infiniteScroll);
  const prevAllDataRef = (0, _react.useRef)(allData);
  (0, _react.useEffect)(() => {
    if (filteredResults !== null && filteredResults !== void 0 && filteredResults.length) {
      setAllData(filteredResults);
      setRange(calculRange(filteredResults, rows));
    }
  }, [filteredResults]);
  (0, _react.useEffect)(() => {
    setAllData(tableData);
  }, [tableData]);
  if (!rows) {
    rows = 30;
  }

  // function next Data slice
  const Next = Data => {
    const start = (page - 1) * rows;
    const end = page * rows;
    return Data === null || Data === void 0 ? void 0 : Data.slice(start, end);
  };
  const OnePage = Data => {
    return Data === null || Data === void 0 ? void 0 : Data.slice(0, rows);
  };

  // Update setData (pagination and infinite scroll)
  (0, _react.useEffect)(() => {
    if (pagination && !infiniteScroll) {
      setData(Next(allData));
    }
    setNewData(Next(allData));
    if ((newDatas === null || newDatas === void 0 ? void 0 : newDatas.length) > 0 && infiniteScroll) {
      if (prevAllDataRef.current !== allData) {
        setData(OnePage(allData));
      } else {
        setData(prevData => {
          const newData = [...prevData];
          if (prevData.length < allData.length) {
            newData.push(...newDatas);
          }
          return newData;
        });
      }
      prevAllDataRef.current = allData;
    }
  }, [page, allData]);
  let DATA = data === null || data === void 0 ? void 0 : data.filter((x, i) => data.indexOf(x) === i);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.table
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.thead
  }, /*#__PURE__*/_react.default.createElement("tr", null, Columns === null || Columns === void 0 ? void 0 : Columns.map((_ref2, index) => {
    let {
      header,
      accessor,
      sortable
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_TableHead.default, {
      key: index,
      item: header,
      accessor: accessor,
      handleSorting: handleSorting,
      sortable: sortable,
      customClass: customClass,
      setPage: setPage,
      infiniteScroll: infiniteScroll
    });
  }))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: customClass === null || customClass === void 0 ? void 0 : customClass.tbody
  }, dataRow === DATA ? DATA === null || DATA === void 0 ? void 0 : DATA.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: index,
      data: item,
      Columns: Columns,
      index: index,
      onDragStart: onDragStart,
      onDragOver: onDragOver,
      onDrop: onDrop,
      isDragging: isDragging,
      isTarget: false
    });
  }) : dataRow === null || dataRow === void 0 ? void 0 : dataRow.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: index,
      data: item,
      Columns: Columns,
      index: index,
      onDragStart: onDragStart,
      onDragOver: onDragOver,
      onDrop: onDrop,
      isDragging: isDragging,
      isTarget: false
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    id: "scrollAnchor",
    style: infiniteScroll ? {
      display: 'flex'
    } : {
      display: 'none'
    }
  }, "...loading"), /*#__PURE__*/_react.default.createElement(_TableFooter.default, {
    range: range,
    setPage: setPage,
    page: page,
    pagination: pagination,
    data: data
  }));
};
var _default = TableNotLazy;
exports.default = _default;