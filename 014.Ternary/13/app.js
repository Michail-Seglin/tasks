// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 – чет
const num = prompt();
let a = Math.trunc(num / 1000);
let b = Math.trunc((num - a * 1000) / 100);
let c = Math.trunc((num - a * 1000 - b * 100) / 10)
let d = num % 10;

if (isNaN(num)) {
    console.log('NaN');
} else if (a % 2 === 0) {
    console.log(`${a} - чет`);
}
else console.log(`${a} - нечет`);
if (b % 2 === 0) {
    console.log(`${b} - чет`);
}
else console.log(`${b} - нечет`)
if (c % 2 === 0) {
    console.log(`${c} - чет`);
}
else console.log(`${c} - нечет`)
if (d % 2 === 0) {
    console.log(`${d} - чет`)
}
else console.log(`${d} - нечет`)
   
