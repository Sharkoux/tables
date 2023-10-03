import React, { useState, useRef, useEffect } from "react";



/**
 * <Component Cell>
 * @param   {state} { data, accessor} state for cell data and className
 * @return  {Component Cell}  
 */

const TableCell = ({ data, accessor, cell }) => {


  const tData = data[accessor] ? data[accessor] : null;

  if (cell) {
    return (
      <td className={`cell cell-${accessor}`} key={accessor}>{cell(tData)}</td>
    )
  }

  return (
    <td className={`cell cell-${accessor}`} key={accessor}>{tData}</td>
  )
}

export default TableCell;