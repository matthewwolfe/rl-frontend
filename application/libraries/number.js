export function range(start, stop) {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }

    const array = [];

    for (let i = start; i < stop; i++) {
        array.push(i);
    }

    return array;
}
