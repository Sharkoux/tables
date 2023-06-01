
import { useState, useEffect, useRef } from 'react';


export const useInfiniteScroll = (lazy, first, infiniteScroll, allUser, rows, onPage, range, setPage, page) => {
    const [firsts, setFirst] = useState(first)
    const [pages, setPages] = useState(page)



    const handleScroll = (entries) => {
        const entry = entries[0];
        if (!lazy) {
            if (entry.isIntersecting && page <= range?.length) {
                setPage(page + 1)
            }
        }
        else {
            if (entry.isIntersecting && first < allUser) {
                onPage({ page: pages + 1, first: firsts + rows })
            }
        }

    };

    useEffect(() => {

        if (!infiniteScroll) {
            return
        }
        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        observer.observe(document.querySelector('#scrollAnchor'));

        return () => observer.disconnect();
    }, [handleScroll]);


};

