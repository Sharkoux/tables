import React, { useEffect, useState, useRef } from "react"; import TableNotLazy from "./NotLazy/tableComponentNotLazy"; import TableLazy from "./Lazy/tableComponentLazy"; const Table = ({ first, draggables, input, onSearch, onSort, allUser, page, onPage, Columns, Data, customClass, rows, search, pagination, infiniteScroll, lazy }) => { if (!lazy) { return <TableNotLazy draggables={draggables} input={input} lazy={lazy} Columns={Columns} Data={Data} customClass={customClass} rows={rows} search={search} pagination={pagination} infiniteScroll={infiniteScroll} /> } return <TableLazy lazy={lazy} first={first} draggables={draggables} input={input} onSearch={onSearch} onSort={onSort} allUser={allUser} onPage={onPage} Columns={Columns} Data={Data} customClass={customClass} rows={rows} pagination={pagination} infiniteScroll={infiniteScroll} page={page} /> }; export default Table;