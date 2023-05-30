"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInfiniteScroll = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useInfiniteScroll = (lazy, firsts, infiniteScroll, allUser, rows, onPage, range, setPage, page) => {
  const [first, setFirst] = (0, _react.useState)(firsts);
  const [pages, setPages] = (0, _react.useState)(page);
  const handleScroll = entries => {
    const entry = entries[0];
    if (!lazy) {
      if (entry.isIntersecting && page <= (range === null || range === void 0 ? void 0 : range?.length)) {
        setPage(page + 1);
      }
    } else {
      if (entry.isIntersecting && firsts < allUser) {
        onPage({
          page: page + 1,
          first: firsts + rows
        });
      }
    }
  };
  (0, _react.useEffect)(() => {
    if (!infiniteScroll) {
      return;
    }
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    observer.observe(document.querySelector('#scrollAnchor'));
    return () => observer.disconnect();
  }, [handleScroll]);
};
exports.useInfiniteScroll = useInfiniteScroll;