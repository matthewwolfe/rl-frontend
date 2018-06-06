export function titleCaseToDashes(string) {
    return string.toLowerCase().replace(' ', '-');
}

export function uniqueId() {
    return Math.floor((1 + Math.random()) * 0x1000000000).toString(16);
}
