// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1
const a = +prompt('Введите количество сантиметров');
let b = a / 100;
 if (isNaN(a)) {
     console.log('Ошибка ввода');
 }
 else {
     if (Number.isInteger(b)) {
         console.log(b);
     }
     else {
         console.log(Math.trunc(b));
    }
 }