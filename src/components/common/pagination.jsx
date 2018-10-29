import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    // Get number of pages.
    const { currentPage, itemCount, pageSize, onPageChange } = props;
    const pageCount = itemCount / pageSize;
    const pages = _.range(1, pageCount + 1);

    // Quit without displaying pages if < 2
    if (pageCount <= 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                {/* Iterate through page numbers and display them at bottom. */}
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
