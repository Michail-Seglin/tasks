// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 
const n = 5;
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    let a = +prompt();
    if (!isNaN(a)) {
        arr.push(a);
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        sum += arr[i];
        continue
    } else break;
} console.log(sum);

