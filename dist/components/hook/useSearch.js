"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSearch = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = require("react");
const useSearch = (data, search) => {
  const [filteredResults, setFilteredResults] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const filterData = data === null || data === void 0 ? void 0 : data.filter(item => {
      var _Object$values$join;
      return (_Object$values$join = Object.values(item).join('')) === null || _Object$values$join === void 0 ? void 0 : _Object$values$join.toLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLowerCase());
    });
    setFilteredResults(filterData);
  }, [search]);
  return filteredResults;
};
exports.useSearch = useSearch;