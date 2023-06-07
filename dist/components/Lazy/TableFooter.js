"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TableFooter = _ref => {
  let {
    first,
    allUser,
    onPage,
    pagination,
    rows,
    page
  } = _ref;
  const [firsts, setFirst] = (0, _react.useState)(first);
  const [pages, setPages] = (0, _react.useState)(page);
  (0, _react.useEffect)(() => {
    onPage({
      first: firsts,
      page: pages
    });
  }, [pages]);
  const handleNext = () => {
    if (page >= Math.ceil(allUser / rows)) {
      console.log('not');
      return;
    }
    setFirst(first + rows);
    setPages(page + 1);
  };
  const handlePrevious = () => {
    if (pages <= 1) {
      return;
    }
    setFirst(first - rows);
    setPages(page - 1);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, " ", pagination ? /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, " ", /*#__PURE__*/_react.default.createElement("button", {
    onClick: handlePrevious
  }, "Previous"), " ", /*#__PURE__*/_react.default.createElement("p", null, page), " ", /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleNext
  }, "Next"), " ") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), " ");
};
var _default = TableFooter;
exports.default = _default;