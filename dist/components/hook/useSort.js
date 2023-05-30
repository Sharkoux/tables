"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSort = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.sort.js");
var _react = require("react");
const useSort = (data, sortField, sortOrder) => {
  const sortedData = [...data];
  if (sortField) {
    sortedData.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  }
  return sortedData;
};
exports.useSort = useSort;