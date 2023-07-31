function faMap(arr, callBack) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const mappedValue = callBack(arr[i], i, arr);
        mappedArray.push(mappedValue);
    }
    return mappedArray;
}

// Ví dụ sử dụng:
const arr = [1, 2, 3, 4, 5];

const doubledArr = faMap(arr, (item) => item);
console.log("ex1", doubledArr)

function faFilter(array, callback) {
    const filteredArray = [];
    faMap(array, (item, index, arr) => {
        if (callback(item, index, arr)) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
}
const filteredUsers = faFilter(arr, (user) => user > 3);

console.log("ex2", filteredUsers);
