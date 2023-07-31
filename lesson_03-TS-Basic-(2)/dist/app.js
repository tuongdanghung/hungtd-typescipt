"use strict";
// kiểu dữ liệu tuple
// là một kiểu dữ liệu để fix cứng các kiểu dữ liệu thuộc các phần tử trong array
// dùng trong mảng ngắn
// let randomArray: (string | number | boolean)[] = ["admin", 1, true];
// ---------------------
// kiểu dữ liệu enum nên viết hoa khi khai báo
// là một tập hợp các hằng số không thể thay đổi
// thường được dùng để validate dữ liệu
// thường sẽ được sử dụng bên server nhiều hơn
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["MANAGER"] = 1] = "MANAGER";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const user = {
    userName: "xxx",
    password: 123,
    roles: 1,
};
if (user.roles === Roles.ADMIN ||
    user.roles === Roles.MANAGER ||
    user.roles === Roles.USER) {
    console.log("done");
}
else {
    console.log("fail");
}
const faMap = (callBack) => {
    callBack("hello");
};
faMap((a = "hello") => {
    const arr = [];
    arr.push(a);
    console.log(arr);
    return arr;
});
