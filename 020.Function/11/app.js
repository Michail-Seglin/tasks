// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce
const n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
    let a = prompt('Input value');
    if (!isNaN(a)) {
        arr.push(a)
    }
}

// const res = arr.reduce(function (b, el) {
//     return b * el
// }, 1)
// console.log(res);

// let res = 1;
// arr.forEach(function (el) {
//     res *= el;
// })
// console.log(res);

// let i = 0;
// let res = 1;
// while (i < 5) {
//     res *= arr[i];
//     i++
// }
// console.log(res);
let res = 1;
for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}

console.log(res);