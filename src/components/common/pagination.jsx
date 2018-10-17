import React from 'react';

const Pagination = (props) => {
    const { itemCount, pageSize } = props;
    const pageCount = itemCount / pageSize;
    console.log(pageCount);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                <li className="page-item">
                    <a className="page-link">1</a>
                </li>

            </ul>
        </nav>
    );
}

export default Pagination;
