// . Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. 
const num = +prompt('input number');
let arr = [];
for (let i = 0; i < num; i++) {
    let a = prompt('input str')
    arr.push(a)
}
console.log(arr);

