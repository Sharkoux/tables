import React, { useEffect, useState, useRef } from "react";
import TableHeadItem from "./TableHead";
import TableRow from "../TableRow";
import TableFooter from "./TableFooter";
import useDraggableRows from "../hook/useDraggable";
import { useInfiniteScroll } from "../hook/useInfiniteScroll";




/**
 * <Component Table for lazy version>
 * @param  {state} { lazy, first, draggable, input, allUser, Columns, Data, customClass, rows, pagination, infiniteScroll, page } State
 * @param  {fonction} { onSearch, onSort, onPage } function state update
 * @return {component Table with header, rows and footer}  Dispatch function and state to children
 */


const TableLazy = ({ lazy, first, draggables, input, onSearch, onSort, allUser, onPage, Columns, Data, customClass, rows, pagination, infiniteScroll, page }) => {
    const [search, setSearch] = useState(null)

    //init hook for infiniteScroll and Drag/Drop
    useInfiniteScroll(lazy, first, infiniteScroll, allUser, rows, onPage, page)
    const [dataRow, onDragStart, onDragOver, onDrop] = useDraggableRows(Data, draggables)

    //function search 
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    //event for onSearch function, modification state
    useEffect(() => {
        onSearch({ search: search })
    }, [search])

    return (
        <>
            {input ? <input className={customClass?.input} onChange={handleSearch}></input> : <></>}
            <table className={customClass?.table}>
                <thead className={customClass?.thead}>
                    <tr>
                        {Columns?.map(({ header, accessor, sortable }, index) => {
                            return <TableHeadItem onSort={onSort} key={index} item={header} accessor={accessor} sortable={sortable} customClass={customClass} infiniteScroll={infiniteScroll} />;
                        })}
                    </tr>
                </thead>
                <tbody className={customClass?.tbody} >
                    {dataRow === Data ?
                        Data?.map((item, index) => {
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
            <TableFooter first={first} allUser={allUser} onPage={onPage} rows={rows} pagination={pagination} data={Data} page={page} />
        </>
    );

}

export default TableLazy