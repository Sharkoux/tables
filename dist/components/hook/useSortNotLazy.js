"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSort = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.regexp.to-string.js");
var _react = require("react");
const useSort = data => {
  const [tableData, setTableData] = (0, _react.useState)(data);
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sort = [...data].sort((a, b) => {
        if (!a[sortField]) return 1;
        if (!b[sortField]) return -1;
        if (!a[sortField] && !b[sortField]) return 0;
        return a[sortField].toString().localeCompare(b[sortField].toString(), {
          numeric: true
        }) * (sortOrder === "asc" ? 1 : -1);
      });
      setTableData(sort);
    }
  };
  return [tableData, handleSorting];
};
exports.useSort = useSort;