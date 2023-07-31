// kiểu dữ liệu tuple
// là một kiểu dữ liệu để fix cứng các kiểu dữ liệu thuộc các phần tử trong array
// dùng trong mảng ngắn
// let randomArray: (string | number | boolean)[] = ["admin", 1, true];

// ---------------------

// kiểu dữ liệu enum nên viết hoa khi khai báo
// là một tập hợp các hằng số không thể thay đổi
// thường được dùng để validate dữ liệu
// thường sẽ được sử dụng bên server nhiều hơn
enum Roles {
  ADMIN,
  MANAGER,
  USER,
}

const user: { userName: string; password: number; roles: Roles } = {
  userName: "xxx",
  password: 123,
  roles: 1,
};

if (
  user.roles === Roles.ADMIN ||
  user.roles === Roles.MANAGER ||
  user.roles === Roles.USER
) {
  console.log("done");
} else {
  console.log("fail");
}
// enum: là một kiểu dữ liệu cho phép người dùng cho phép thêm và gán tham số truyền vào và thuộc nhiều kiểu dữ liệu khác nhau tùy bài toán
// ------------------------------------

// kiểu dữ liệu funciton
type FunctionMap = (key: string) => string[];

const faMap = (callBack: FunctionMap): void => {
  callBack("hello");
};

faMap((a = "hello") => {
  const arr: string[] = [];
  arr.push(a);
  console.log(arr);
  return arr;
});
