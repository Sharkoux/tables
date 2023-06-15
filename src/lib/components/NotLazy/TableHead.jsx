import React, { useState, useEffect } from "react";


/**
 * <Component Head Table with sortable Columns (not lazy load)>
 * @param   {state} { accessor, item, handleSorting, sortable, setPage, infiniteScroll  }
 * @return  { header component and new order}  Order update 
 */




const TableHeadItem = ({ accessor, item, handleSorting, sortable, setPage, infiniteScroll }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");



    const handleSortingChange = (accessor) => {

        const sortOrder = accessor == sortField && order == "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
        if (infiniteScroll) {
            setPage(1)
        }

    }

    return (
        <td className={sortable ? `Columns Columns-${accessor} Columns-Sortable` : `Columns Columns-${accessor}`} title={item} onClick={sortable ? () => handleSortingChange(accessor) : null} >
            {item}

        </td>
    );
};

export default TableHeadItem;