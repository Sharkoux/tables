import React, { useEffect, useState, useRef } from "react";
import TableNotLazy from "./NotLazy/tableComponentNotLazy";
import TableLazy from "./Lazy/tableComponentLazy";


/**
 * <Component Table >
 * @param   {state} { first, draggable, input ...}  Personalization parameter
 * @param   {function} { onSearch, onSort, ...}  State Update
 * @return  {Component}       Component Table lazy or not lazy
 */


const Table = ({ first, draggables, input, onSearch, onSort, allUser, page, onPage, Columns, Data, customClass, rows, search, pagination, infiniteScroll, lazy }) => {

    //Choice lazy or not lazy
    if (!lazy) {
        return <TableNotLazy draggables={draggables} lazy={lazy} Columns={Columns} Data={Data} customClass={customClass} rows={rows} search={search} pagination={pagination} infiniteScroll={infiniteScroll} />
    }
    return <TableLazy lazy={lazy} first={first} draggables={draggables} input={input} onSearch={onSearch} onSort={onSort} allUser={allUser} page={page} onPage={onPage} Columns={Columns} Data={Data} customClass={customClass} rows={rows} pagination={pagination} infiniteScroll={infiniteScroll} />

};

export default Table;