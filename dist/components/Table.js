"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireWildcard(require("react"));
var _tableComponentNotLazy = _interopRequireDefault(require("./NotLazy/tableComponentNotLazy"));
var _tableComponentLazy = _interopRequireDefault(require("./Lazy/tableComponentLazy"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * <Component Table >
 * @param   {state} { first, draggable, input ...}  Personalization parameter
 * @param   {function} { onSearch, onSort, ...}  State Update
 * @return  {Component}       Component Table lazy or not lazy
 */

const Table = _ref => {
  let {
    first,
    draggable,
    input,
    onSearch,
    onSort,
    allUser,
    page,
    onPage,
    Columns,
    Data,
    customClass,
    rows,
    search,
    pagination,
    infiniteScroll,
    lazy
  } = _ref;
  //Choice lazy or not lazy
  if (!lazy) {
    return /*#__PURE__*/_react.default.createElement(_tableComponentNotLazy.default, {
      lazy: lazy,
      Columns: Columns,
      Data: Data,
      customClass: customClass,
      rows: rows,
      search: search,
      pagination: pagination,
      infiniteScroll: infiniteScroll
    });
  }
  return /*#__PURE__*/_react.default.createElement(_tableComponentLazy.default, {
    lazy: lazy,
    first: first,
    draggable: draggable,
    input: input,
    onSearch: onSearch,
    onSort: onSort,
    allUser: allUser,
    page: page,
    onPage: onPage,
    Columns: Columns,
    Data: Data,
    customClass: customClass,
    rows: rows,
    pagination: pagination,
    infiniteScroll: infiniteScroll
  });
};
var _default = Table;
exports.default = _default;