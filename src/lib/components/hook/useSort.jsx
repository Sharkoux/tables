import { useState } from "react";


export const useSort = (data) => {
    const [tableData, setTableData] = useState(data);

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sort = [...data].sort((a, b) => {
                if (!a[sortField]) return 1;
                if (!b[sortField]) return -1;
                if (!a[sortField] && !b[sortField]) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                )
            })
            setTableData(sort)
        }
    };


    return [tableData, handleSorting];
};