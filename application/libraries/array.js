function groupBy(array, property) {
    return array.reduce((returnValues, element) => {
        (returnValues[element[property]] = returnValues[element[property]] || []).push(element);
        return returnValues;
    }, {});
}

export const array = {
    groupBy
};
