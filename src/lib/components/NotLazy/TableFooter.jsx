import React, { useEffect } from "react";



/**
 * < Component Footer, if pagination (notLazy load)>
 * @param   {state} { range, setPage, page, pagination, data } State for update page
 * @return  {Component footer}  Two button for next and previous page
 */



const TableFooter = ({ range, setPage, page, pagination, data }) => {


    useEffect(() => {
        if (page < 1) {
            setPage(1)
        }
        if (page >= range?.length) {
            setPage(range?.length)
        }
    }, [page, setPage, data]);



    return (
        <div >
            {pagination ?
                <div className="footer">
                    <button onClick={() => setPage(page - 1)}>Previous</button>
                    <p>{page}</p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
                :
                <></>
            }

        </div>

    )


}

export default TableFooter