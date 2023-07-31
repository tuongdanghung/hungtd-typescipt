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
    }
]
const newUser = []
const newUser2 = []
let sum = 0
users.forEach(element => {
    let obj = {}
    const { first_name, last_name } = element
    obj = { first_name: first_name, last_name: last_name }
    newUser.push(obj)
    newUser2.push(first_name + " " + last_name)
    if (element.gender === "Female" && element.age < 40) {
        console.log("ex2", element)
    }
    sum += element.age
});


const sumWithInitial = users.reduce(
    (tong, loop) => { return tong.concat(loop) }, []
);

const sumWithInitial2 = users.reduce(
    (tong, loop) => {
        if (loop.age > 40) {
            return tong.concat({ firstName: loop.first_name, lastName: loop.last_name })
        }
        return tong
    }, []
);

const sort = users.sort((a, b) => a.first_name.localeCompare(b.first_name))

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
console.log("ex1", newUser)
console.log("ex3", newUser2)
console.log("ex4", usersWithCamelCaseKeys);
console.log("ex5", sum / users.length)
console.log("ex6.1", sumWithInitial)
console.log("ex6.2", sumWithInitial2)
console.log("ex7", sort)
