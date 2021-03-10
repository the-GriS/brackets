module.exports = function check(str, bracketsConfig) {
    let arrMap = new Map(bracketsConfig);
    const arr = [];
    for (let bracket of str) {
        if (bracket === arrMap.get(arr[arr.length - 1])) {
            arr.pop();
        } else {
            arr.push(bracket);
        }
    }
    return !arr.length;
};
