import React, { useState, useEffect } from "react";





/**
 * <Component Head Table with sortable Columns (lazy load)>
 * @param   {state} { accessor, item, sortable } 
 * @param   {function} { onSort } Sortfield, sortOrder Update
 * @return  {sortField, sortOrder, header component}  Order update 
 */


const TableHeadItem = ({ onSort, accessor, item, sortable }) => {
    const [sortField, setSortField] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)

    useEffect(() => {
        onSort({ sortField: sortField, sortOrder: sortOrder })
    }, [sortField, sortOrder]);

    //Function new order and sort field
    const handleSort = () => {
        if (!sortable) {
            return
        }
        setSortField(accessor)
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }


    return (
        <td className={sortable ? `Columns Columns-${accessor} Columns-Sortable` : `Columns Columns-${accessor}`} title={item} onClick={handleSort} >
            {item}

        </td>
    );
};

export default TableHeadItem;