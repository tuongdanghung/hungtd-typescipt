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

const newUser: object[] = [];
const newUser2: string[] = [];
let sumAge:number = 0;
users.forEach((element: any) => {
  let obj: object = {};
  const { first_name, last_name } = element;
  obj = { first_name: first_name, last_name: last_name };
  newUser.push(obj);
  newUser2.push(first_name + " " + last_name);
  if (element.gender === "Female" && element.age < 40) {
    console.log("ex-2 : ", element);
  }
  sumAge += element.age;
});

function convertToCamelCase(users : object[]):object[] {
  return users.map((user:any) => {
    const camelCaseUser:any = {};
    for (const key in user) {
      const camelCaseKey: string = key.replace(/_./g, (x) => x.charAt(1).toUpperCase());
      camelCaseUser[camelCaseKey] = user[key];
    }
    return camelCaseUser;
  });
}
const usersWithCamelCaseKeys = convertToCamelCase(users);

const sumWithInitial = users.reduce(
    (tong, loop:any) => { return tong.concat(loop) }, []
);
interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    age: number;
    salary: number;
  }
const sumWithInitial2:{firstName: string; lastName: string}[] = users.reduce(
    (tong:{ firstName: string; lastName: string }[], loop) => {
        if (loop.age > 40) {
            return tong.concat({ firstName: loop.first_name, lastName: loop.last_name })
        }
        return tong
    }, []
);
console.log("ex-1 : ", newUser);
console.log("ex-3 : ", newUser2);
console.log("ex-4 : ", usersWithCamelCaseKeys);
console.log("ex-5 : ", sumAge / users.length)
console.log("ex-6.1 : ", sumWithInitial)
console.log("ex-6.2 : ", sumWithInitial2)