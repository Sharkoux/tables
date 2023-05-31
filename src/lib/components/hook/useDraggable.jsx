import { useEffect, useState } from "react";


/* Hook Draggable for drag/drop rows version Lazy */


const useDraggableRows = (initialData, draggable, rows, page, infiniteScroll) => {
  const [dataRow, setDataRow] = useState(initialData);
  const [isDragging, setIsDragging] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState(null);

  if (!draggable) {
    return
  }

  useEffect(() => {
    setDataRow(initialData)
  }, [initialData])


  const onDragStart = (index) => {
    setDraggedIndex(index);
    setIsDragging(true)
  };

  const onDragOver = (index) => {
    if (!draggable) {
      return
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
    setDraggedIndex(null);
    setIsDragging(false)
  };

  return [dataRow, onDragStart, onDragOver, onDrop, isDragging];
}

export default useDraggableRows