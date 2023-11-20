import { useEffect, useState } from "react";

const getPageArray = (arrayLength=0, startNumber) => {
    return [...Array(arrayLength)].map((item, idx) => {
        return startNumber + idx + 1;
    })
}

const Pagination = ({totalPages, fetchMovieData}) => {
    const totalPageButtons = Math.min(totalPages, 10);
    const pageArray = getPageArray(totalPageButtons, 0);
    const [pages, setPages] = useState(pageArray);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetchMovieData(activePage);
        if (activePage > pages[pages.length - 1]) {
            const startNumber = activePage - totalPageButtons;
            const newPageArray = getPageArray(totalPageButtons, startNumber)
            setPages(newPageArray);
        }

        if(activePage < pages[0]) {
            const startNumber = activePage - 1;
            const newPageArray = getPageArray(totalPageButtons, startNumber)
            setPages(newPageArray);
        }
    }, [activePage]);

    return (
        <div className="pagination">
            <button onClick={() => { setActivePage(activePage - 1)}} disabled={activePage === 1}>Prev </button>
            {
                pages?.map((pageNumber) => {
                    return (<button className={activePage === pageNumber ? 'selected' : ''} onClick={() => {setActivePage(pageNumber)}}>{pageNumber}</button>)
                })
            }
            <button disabled={totalPages === activePage}  onClick={() => { setActivePage(activePage + 1) }}>Next</button>
        </div>
    )
}

export default Pagination;