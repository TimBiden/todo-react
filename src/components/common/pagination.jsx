import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    // Get number of pages.
    const { itemCount, pageSize } = props;
    const pageCount = itemCount / pageSize;
    const pages = _.range(1, pageCount + 1);

    // Quit without displaying pages if < 2
    if (pageCount <= 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                {/* Iterate through page numbers and display them at bottom. */}
                {pages.map(page => (
                    <li key={page} className="page-item">
                        <a className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
