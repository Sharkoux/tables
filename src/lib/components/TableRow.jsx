import React, { useState, useEffect, Component } from "react";
import TableCell from "./TableCell";

/**
 * <Component Row with draggable function>
 * @param   {state} { data, columns, index, isTarget} State for map Cell component
 * @param   {function} { onDragStart, onDragOver, onDrop} Function for drag and drop
 * @return  {Component Cell}  Displays cell and calls functions to manage drag and drop
 */

const TableRow = ({ data, Columns, index, onDragStart, onDragOver, onDrop, draggables }) => {
  const isDraggable = draggables === true;

  return (
    <tr
      onDragStart={() => onDragStart(index)}
      onDragOver={() => onDragOver(index)}
      onDrop={onDrop}
      draggable={isDraggable}
      className={`rows rows-${index}`}
    >
      {Columns.map(({ accessor, cell }) => {
        return <TableCell data={data} accessor={accessor} key={accessor} index={index} cell={cell} />
      })}
    </tr>
  );
};

export default TableRow;