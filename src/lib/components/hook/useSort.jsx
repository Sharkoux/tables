import { useState } from "react";


export const useSort = (data, sortField, sortOrder) => {
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