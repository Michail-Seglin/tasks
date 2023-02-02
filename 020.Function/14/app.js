// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]
const n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
    let a = prompt('Input element');
    arr.push(a);
}

// let res = [];
// arr.forEach(function (el) {
//     res.push("#" + el);
// })
// console.log(res);

// let res = arr.map(function(el){
//     return "#" +el;
// })
// console.log(res);

// let i = 0;
// let res = [];
// while (i < n) {
//     res.push('#' + arr[i]);
//     i++
// }
// console.log(res);

let res = [];
for (let i = 0; i < n; i++) {
    res.push('#' + arr[i]);
}
console.log(res);