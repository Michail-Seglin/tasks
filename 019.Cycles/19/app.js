// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const n = 5;
const arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt('input num');
    if (!isNaN(a)) {
        arr.push(a);
    }


}console.log(arr);


