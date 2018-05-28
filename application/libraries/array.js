function addAtIndex(array, element, index) {
    return [...array.slice(0, index), element, ...array.slice(index + 1)];
}

function groupBy(array, property) {
    return array.reduce((returnValues, element) => {
        (returnValues[element[property]] = returnValues[element[property]] || []).push(element);
        return returnValues;
    }, {});
}

function removeAtIndex(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export const array = {
    addAtIndex,
    groupBy,
    removeAtIndex
};
