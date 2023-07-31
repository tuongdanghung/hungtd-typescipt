"use strict";
console.log("ngon");
const a = "a";
const func = (a, b) => {
    // :number: xác định hàm trả về kiểu dữ liệu nào nếu là number thì phải return ra số(string thì return ra chữ)
    // trường hợp function không có return thì dùng :void
    return a + b;
};
console.log(func(1, 2));
// cách khai báo 1 object
let object = {
    name: "xxxx",
    value: "xxxxxxxx",
};
