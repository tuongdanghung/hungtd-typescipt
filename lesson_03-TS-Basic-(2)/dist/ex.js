"use strict";
var users = [
    {
        id: 1,
        first_name: "w",
        last_name: "Harhoff",
        email: "eharhoff0@imageshack.us",
        gender: "Male",
        age: 76,
        salary: 18888,
    },
    {
        id: 2,
        first_name: "Laney",
        last_name: "Whittam",
        email: "lwhittam1@issuu.com",
        gender: "Female",
        age: 20,
        salary: 15018,
    },
];
const newUser = [];
const newUser2 = [];
let sumAge = 0;
users.forEach((element) => {
    let obj = {};
    const { first_name, last_name } = element;
    obj = { first_name: first_name, last_name: last_name };
    newUser.push(obj);
    newUser2.push(first_name + " " + last_name);
    if (element.gender === "Female" && element.age < 40) {
        console.log("ex-2 : ", element);
    }
    sumAge += element.age;
});
function convertToCamelCase(users) {
    return users.map((user) => {
        const camelCaseUser = {};
        for (const key in user) {
            const camelCaseKey = key.replace(/_./g, (x) => x.charAt(1).toUpperCase());
            camelCaseUser[camelCaseKey] = user[key];
        }
        return camelCaseUser;
    });
}
const usersWithCamelCaseKeys = convertToCamelCase(users);
const sumWithInitial = users.reduce((tong, loop) => { return tong.concat(loop); }, []);
const sumWithInitial2 = users.reduce((tong, loop) => {
    if (loop.age > 40) {
        return tong.concat({ firstName: loop.first_name, lastName: loop.last_name });
    }
    return tong;
}, []);
console.log("ex-1 : ", newUser);
console.log("ex-3 : ", newUser2);
console.log("ex-4 : ", usersWithCamelCaseKeys);
console.log("ex-5 : ", sumAge / users.length);
console.log("ex-6.1 : ", sumWithInitial);
console.log("ex-6.2 : ", sumWithInitial2);
