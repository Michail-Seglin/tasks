// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt('Input value');
    if (isNaN(a)) {
        arr.push(a)
    }
}

// const res = arr.filter(function (el) {
//     return el[0] == 'a' || el[0] == 'h' ? true : false
// })
// console.log(res);

// let res = [];
// arr.forEach(function (el) {
//     el[0] == 'a' || el[0] == 'h' ? res.push(el) : null;
// })
// console.log(res);

// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i][0] == 'a' || arr[i][0] == 'h' ? res.push(arr[i]) : null;
// }
// console.log(res);

let res = [];
let i = 0;
while (i < n) {
    arr[i][0] == 'a' || arr[i][0] == 'h' ? res.push(arr[i]) : null;
    i++
}
console.log(res);