function exercise_01(arr: number[], target: number): any[] {
  let newArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArr.push([arr[j], arr[i]]);
      }
    }
  }
  return newArr;
}
const arr = exercise_01([2, 7, 11, 15, 8, 1], 9);
console.log(arr);
// ex 03

function exercise_03(params: string): boolean {
  let newStr: string = "";
  newStr = params.toLowerCase();
  newStr = newStr.replace(/[^a-zA-Z0-9]/g, "");
  //   replace
  // cách 1
  //   return newStr == newStr.split("").reverse().join("");
  // cach 2
  let result: boolean = true;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      result = false;
    }
  }
  return result;
}
const str = exercise_03("race a car");
console.log(str);

function exercise_04(params: string, target: string): boolean {
  const sortedParams = params.split("").sort().join("");
  const sortedTarget = target.split("").sort().join("");
  return sortedParams === sortedTarget;
}

const result = exercise_04("abc sad", "bca asd");
console.log("kq", result); // Kết quả: true

// exercise_02

function exercise_05(params: number[]) {
  let sum = params[0];
  let index = params[0];
  for (let i = 1; i < params.length; i++) {
    index = Math.max(params[i], params[i] + index);
    sum = Math.max(sum, index);
  }
  console.log(sum);
}

const brackets = exercise_05([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
