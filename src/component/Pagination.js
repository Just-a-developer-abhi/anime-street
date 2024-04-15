import React from "react";

const Pagination = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="pagination">
      {/* {pages.map((page) => (
        <div
          key={page}
          style={choosingStyle(page)}
          onClick={(e) => props.handlePaginationOnClick(page)}
        >
          {page}
        </div>
      ))} */}
    </div>
  );
};

export default Pagination;
