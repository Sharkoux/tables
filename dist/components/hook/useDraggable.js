"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
/* Hook Draggable for drag/drop rows version Lazy */

const useDraggableRows = (initialData, draggable, rows, page, infiniteScroll) => {
  const [dataRow, setDataRow] = (0, _react.useState)(initialData);
  const [isDragging, setIsDragging] = (0, _react.useState)(false);
  const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
  if (!draggable) {
    return;
  }
  (0, _react.useEffect)(() => {
    setDataRow(initialData);
  }, [initialData]);
  const onDragStart = index => {
    if (!draggable) {
      return;
    }
    setDraggedIndex(index);
    setIsDragging(true);
  };
  const onDragOver = index => {
    if (!draggable) {
      return;
    }
    if (draggedIndex === null || draggedIndex === index) {
      return;
    }
    const draggedRow = initialData[draggedIndex];
    const newData = [...initialData];
    newData.splice(draggedIndex, 1);
    newData.splice(index, 0, draggedRow);
    setDataRow(newData);
  };
  const onDrop = () => {
    if (!draggable) {
      return;
    }
    setDraggedIndex(null);
    setIsDragging(false);
  };
  return [dataRow, onDragStart, onDragOver, onDrop, isDragging];
};
var _default = useDraggableRows;
exports.default = _default;