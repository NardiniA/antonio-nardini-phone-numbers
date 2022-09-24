export const removeDuplicates = (arr) => {
    const seen = new Set();

    return arr.filter(elem => {
        const duplicate = seen.has(elem.name);
        seen.add(elem.name);
        return !duplicate;
    });
}