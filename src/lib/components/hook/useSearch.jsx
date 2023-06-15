

import { useState, useEffect } from "react";


export const useSearch = (data, search) => {

    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        const filterData = data?.filter((item) => {
            return Object.values(item).join('')?.toLowerCase().includes(search?.toLowerCase())
        })
        setFilteredResults(filterData)
    }, [search]);




    return filteredResults;
};