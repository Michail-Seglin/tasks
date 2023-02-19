// . На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки
const n = 5;
const arr = [];
function doArray(n_) {
    for (let i = 0; i < n; i++) {
        let a = prompt('input string');
        arr.push(a);
    }
    return arr;
};
function findMax(array_) {
    let max = '';
    let value = '';
    for (let i = 0; i < array_.length; i++) {
        if (array_[i].length > max) {
            max = array_[i].length;
            value = array_[i];
        }
    }
    return value
};

let array = doArray(n);

let res = findMax(arr);
console.log(res);