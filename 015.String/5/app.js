// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы
const str = prompt('').trim().toLowerCase();
if (isNaN(str)) {
    console.log(str[0].toUpperCase() + str.slice(1));
}
else {
    console.log('Ошибка ввода');
}
console.log(isNaN(str) ? str[0].toUpperCase() + str.slice(1) : 'Ошибка ввода');