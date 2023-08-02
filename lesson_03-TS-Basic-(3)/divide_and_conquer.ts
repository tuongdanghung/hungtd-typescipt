function search(array: number[], val: number): number {
  let min = 0;
  let max = array.length - 1;
  while (min < max) {
    let middle = Math.floor((max + min) / 2);
    // let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([-1, -2, 1, 2, 3], 1));
