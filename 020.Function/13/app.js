// . На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach
const n = 5;
let arr = [];
const st = 'javascript';

for (let i = 0; i < n; i++) {
    let a = prompt('Input value');
    if (isNaN(a)) {
        arr.push(a)
    }
}

// let res = [];
// arr.forEach(function (el){
//     if(el.includes(st)){
//         res.push(el)
//     }
// })
// console.log(res);
let arr2 = [];
const res = arr.filter(function (el) {
    return el.includes(st) ? arr2.push(el) : null
})
console.log(arr2);