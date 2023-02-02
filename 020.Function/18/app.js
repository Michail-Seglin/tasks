// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map
const n = 5;
let arr = [];
let res = [];
for (let i = 0; i < n; i++) {
    let a = prompt('Input value');
    if (!isNaN(a)) {
        arr.push(a);
    }
}

// const res1 = arr.map(function (el) {
//     return el ** 2
// })
// console.log(res1);

// arr.forEach(function(el){
//     res.push(el**2);
// })
// console.log(res);

// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] ** 2)
// }
// console.log(res);

let i = 0;
while (i < arr.length) {
    res.push(arr[i] ** 2);
    i++
}
console.log(res);