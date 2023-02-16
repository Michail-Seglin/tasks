// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке. 
let n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
    let a = +prompt('Input number');
    if (!isNaN(a)) {
        arr.push(a);
    } else console.log('error input');
};
function minMax(arr_) {
    let minN = 0;
    let maxN = 0;
    for (let i = 0; i < arr_.length; i++)
        if (arr[i] < minN) {
            minN = arr[i];
        }

    for (let i = 0; i < arr_.length; i++)
        if (arr[i] > maxN) {
            maxN = arr[i];
        }

    return maxN, minN;
};
let res = minMax(arr);
console.log(res);