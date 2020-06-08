import React from 'react';
import ReactPaginate from 'react-paginate';

import PropTypes from 'prop-types';
import './styles.css'; // Tell webpack that Button.js uses these styles

export default function Pagination({ loadPage, pages }) {
  return (
    <div>
      {pages > 1 && (
        <ReactPaginate
          previousLabel="&laquo; Previous"
          nextLabel="Next &raquo;"
          breakLabel={<span className="gap">...</span>}
          pageCount={pages}
          onPageChange={(number) => loadPage(number.selected)}
          forcePage={2}
          containerClassName="pagination"
          previousLinkClassName="previous_page"
          nextLinkClassName="next_page"
          disabledClassName="disabled"
          activeClassName="active"
        />
      )}
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  loadPage: PropTypes.func.isRequired,
};
