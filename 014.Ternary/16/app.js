// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки
const str = prompt('input string');
if (isNaN(str)) {
    console.log(str.length)
} else console.log('its not a string');