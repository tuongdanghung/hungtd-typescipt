const number = [1, 2, 3, 4]

function numberFuc(paramsNumber) {
    const sum = paramsNumber.reduce((total, item, index, array) => {
        // total giá trị tính tổng và giá trị khởi tạo ban đầu là 0
        // item giá trị của phần tử hiện tại sau khi duyệt từng phần tử mảng
        //  index giá trị số thứ tự phần tử trong mảng
        // array mảng được duyệt
        console.log(total, item, index, array)
        return total + item
    }, 0)
    return sum
}
console.log(numberFuc(number))