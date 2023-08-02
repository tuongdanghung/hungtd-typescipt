"use strict";
function sumZeros(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // console.log("==>>", start, end);
        if (arr[start] + arr[end] > 0) {
            console.log(end);
            end--;
        }
        else if (arr[start] + arr[end] < 0) {
            console.log(start);
            start++;
        }
        else {
            return [arr[start], arr[end]];
        }
    }
}
console.log(sumZeros([-3, -2, -1, 0, 1, 3, 4]));
