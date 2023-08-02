// cach 1

// function checkSame(arr1: number[], arr2: number[]): boolean {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// --------------------------------

// cach 2
// Frequency counter : hàm tính tần suất xuất hiện của một phần ử trong mảng
// sử dụng object để thu thập dữ liệu
function checkSame(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  type frequencyType = {
    [key: number]: number;
  };

  let frequencyCount1: frequencyType = {};
  let frequencyCount2: frequencyType = {};
  console.log("arr1", arr1);
  for (let val of arr1) {
    console.log("val", val);
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }

  console.log("===>>>", frequencyCount1);
  console.log("===>>>>>", frequencyCount2);

  for (let key in frequencyCount1) {
    if (!((+key) ** 2 in frequencyCount2)) {
      return false;
    }

    if (frequencyCount2[(+key) ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkSame([1, 1, 2, 3], [1, 4, 9, 5]));
