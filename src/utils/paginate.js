import _ from 'lodash';

function paginate(items, pageNumber, pageSize) {
    // Get starting number of first item
    const startIndex = (pageNumber - 1) * pageSize;

    // convert items array to lodash wrapper
    return _(items)
        // Perform operations on wrapped array
        .slice(startIndex)
        .take(pageSize)
        .value();
}

export default paginate;
