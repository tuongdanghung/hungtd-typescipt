// const s = "A man, a plan, a canal: Panama"
// let string = ""
// for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "," && s[i] !== " " && s[i] !== ":") {
//         string += s[i]
//     }
// }
// console.log(string.toLocaleLowerCase())
//

const a = "abc"
const b = "cba"

if (a.length !== b.length) {
    console.log("sai")
    // return false
}
for (let i = 0; i < a.length; i++) {
    const charA = a[i]
    const charB = b[(b.length - 1) - i]
    if (charA !== charB) {
        console.log("khong trung nhau")
        break
    } else {
        console.log("chuoi trung nhau")
        break
    }
}