// ===============ES6=====================
// - các từ khóa khai báo biến: (let, const, var)
// - global scope: biến toàn cầu có thể gán gọi lại mọi scope
// - function scope: là phạm vi hoạt động của biến trong function
// - block scope: là phạm vi của biến được khai báo trong if/else, function, for

// truthy:
// -Số khác 0: Mọi số khác 0 đều được coi là truthy.
// -Chuỗi khác rỗng: Một chuỗi có ít nhất một ký tự được coi là truthy.
// -Array và Object: Một mảng không rỗng hoặc một đối tượng được coi là truthy.
// -Biểu thức điều kiện: Một biểu thức điều kiện (conditional expression) hoặc toán tử ba ngôi (? :) trả về giá trị truthy hoặc falsy.
for (let i = 0; i < 5; i++) {
    var element = i;
}
console.log(element)

const func = () => {
    return 5 + 3
}
console.log(func());

(newNum = () => {
    console.log(5 + 5)
})()
// dùng 1 lần

// destructuring object
const obj = {
    name: "string",
    id: 0,
    age: 20
}
// cach 1
// const { name, age, id } = obj
// console.log(name, age, id)

// cach 2
// const { id, ...newObj } = obj
// console.log(newObj)
//

// destructuring dùng để gán các thuộc tính hay các phần tử muốn lấy vào môt biến
// destructuring array:
const arr = [
    { name: "string", id: 0, age: 20 },
    { name: "string1", id: 1, age: 21 }
]
const array = arr.map(item => {
    return { name: item.name, id: item.id }
})
console.log(array)


// rest parameters
function testRest(...params) {

}