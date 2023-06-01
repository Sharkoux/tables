import React, { useEffect, useState, useRef } from "react";
import TableHeadItem from "./TableHead";
import TableRow from "../TableRow";
import TableFooter from "./TableFooter";
import { useSort } from "../hook/useSortNotLazy";
import { useSearch } from "../hook/useSearch";
import { useInfiniteScroll } from "../hook/useInfiniteScroll";
import useDraggableRows from "../hook/useDraggable";







/**
 * <Function for calcul range>
 * @param  {array} Data All data 
 * @param  {string} rows State rows
 * @return {range}  
 */

const calculRange = (Data, rows) => {
    if (!Data) {
        return;
    }
    const range = Array(Math.ceil(Data?.length / rows)).fill(0).map((item, index) => index + 1);
    return range;
}



/**
 * <Component Table without lazy load>
 * @param  {state} {lazy, Columns, Data, customClass, rows, search, pagination, infiniteScroll } state
 * @return {component Table with header, rows and footer}  Dispatch function and state to children
 */

const TableNotLazy = ({ draggables, lazy, Columns, Data, customClass, rows, search, pagination, infiniteScroll, input }) => {

    const [range, setRange] = useState(calculRange(Data, rows))
    const [page, setPage] = useState(1);
    const [allData, setAllData] = useState()
    const [data, setData] = useState([]);
    const [newDatas, setNewData] = useState()

    //Init Hook for infinite Scroll, search, sort, drag and drop
    useInfiniteScroll(lazy, '', infiniteScroll, '', '', '', range, setPage, page)

    const filteredResults = useSearch(Data, search);
    const [tableData, handleSorting] = useSort(filteredResults?.length ? filteredResults : Data);


    const [dataRow, onDragStart, onDragOver, onDrop, isDragging] = useDraggableRows(data, draggables, rows, page, infiniteScroll)



    const prevAllDataRef = useRef(allData);


    useEffect(() => {
        if (filteredResults?.length) {
            setAllData(filteredResults)
            setRange(calculRange(filteredResults, rows))
        }
    }, [filteredResults])


    useEffect(() => {
        setAllData(tableData)
    }, [tableData])

    if (!rows) {
        rows = 30

    }

    // function next Data slice
    const Next = (Data) => {
        const start = (page - 1) * rows;
        const end = page * rows;
        return Data?.slice(start, end)
    }

    const OnePage = (Data) => {
        return Data?.slice(0, rows)
    }

    // Update setData (pagination and infinite scroll)
    useEffect(() => {
        if (pagination && !infiniteScroll) {
            setData(Next(allData))
        }

        setNewData(Next(allData))

        if (newDatas?.length > 0 && infiniteScroll) {
            if (prevAllDataRef.current !== allData) {
                setData(OnePage(allData));
            } else {
                setData(prevData => {
                    const newData = [...prevData];
                    if (prevData.length < allData.length) {
                        newData.push(...newDatas);
                    }
                    return newData;
                });
            }
            prevAllDataRef.current = allData;
        }


    }, [page, allData])

    let DATA = data?.filter((x, i) => data.indexOf(x) === i)




    return (
        <>
            {input ? <input className={customClass?.input} onChange={handleSearch}></input> : <></>}*
            <table className={customClass?.table}>
                <thead className={customClass?.thead}>
                    <tr>
                        {Columns?.map(({ header, accessor, sortable }, index) => {
                            return <TableHeadItem key={index} item={header} accessor={accessor} handleSorting={handleSorting} sortable={sortable} customClass={customClass} setPage={setPage} infiniteScroll={infiniteScroll} />;
                        })}
                    </tr>
                </thead>
                <tbody className={customClass?.tbody} >
                    {dataRow === DATA ?
                        DATA?.map((item, index) => {
                            return <TableRow key={index} data={item} Columns={Columns} index={index} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} draggables={draggables} />
                        })
                        :
                        dataRow?.map((item, index) => {
                            return <TableRow key={index} data={item} Columns={Columns} index={index} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} draggables={draggables} />
                        })

                    }
                </tbody>
            </table>
            <div id="scrollAnchor" style={infiniteScroll ? { display: 'flex' } : { display: 'none' }}>...loading</div>
            <TableFooter range={range} setPage={setPage} page={page} pagination={pagination} data={data} />
        </>
    );

}

export default TableNotLazy