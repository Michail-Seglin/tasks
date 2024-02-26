// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре
let str = prompt('Input string');
if (isNaN(str)) {
    console.log(str.toUpperCase());
} else console.log('Its not a string');