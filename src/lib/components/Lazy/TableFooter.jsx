import React, { useEffect, useState } from "react";


/**
 * < Component Footer, if pagination (lazy load) >
 * @param   {state} { first, allUser, pagination, rows, page} State for update page
 * @param   {function} onPage Function for update state Page
 * @return  {Component footer}  Two button for next and previous page
 */

const TableFooter = ({ first, allUser, onPage, pagination, rows, page }) => {
    const [firsts, setFirst] = useState(first)
    const [pages, setPages] = useState(page)

    useEffect(() => {
        onPage({ first: firsts, page: pages })
    }, [pages]);

    //next data
    const handleNext = () => {
        if (page >= Math.ceil(allUser / rows)) {
            console.log('not')
            return
        }
        setFirst(first + rows)
        setPages(page + 1)
    };

    //previous data
    const handlePrevious = () => {
        if (pages <= 1) {
            return
        }
        setFirst(first - rows)
        setPages(page - 1)
    }


    return (
        <div >
            {pagination ?
                <div className="footer">
                    <button onClick={handlePrevious}>Previous</button>
                    <p>{page}</p>
                    <button onClick={handleNext}>Next</button>
                </div>
                :
                <></>
            }

        </div>

    )


}

export default TableFooter