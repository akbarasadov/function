// //1
let e = prompt("how old are you")
function age(w) {
    if (w >= 18) {
        console.log("заходите");
    } else if (w <= 18) {
        console.log("Выходи");
    } else {
        console.log("Дебил");
    }
}
age(e)

//2
let num1 = +prompt("num1")
let opr = prompt("opr")
let num2 = +prompt("num2")

function calculator(a, c, b) {
    if (c === "+") {
        console.log(a + b);

    } else if (c === "-") {
        console.log(a - b);

    } else if (c === "/") {
        console.log(a / b);

    } else if (c === "*") {
        console.log(a * b);

    }
}
calculator(num1, opr, num2)

//3
function name(a, b, c) {

    let maxName = Math.max(a.length, b.length, c.length)
    if (a.length === maxName) {
        return a
    } else if (b.length === maxName) {
        return b
    } else {
        return c
    }
}
let v = name("Alex", "George", "Michael")
console.log(v);


//4
function name1() {
    let pro = Math.floor(Math.random() * 10)+1
    let pro2 = Math.floor(Math.random() * 10)+1
    let pro3 = Math.floor(Math.random() * 10)+1
    let pro4 = Math.floor(Math.random() * 10)+1
    let pr = `${pro}/${pro2} = ${pro3}/${pro4}`
    console.log(pr);
}
name1()