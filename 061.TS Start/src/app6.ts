// 9. Напишите программу, которая проверяет, является ли заданная строка
// палиндромом (без учета регистра и пробелов)

const str: string = 'anna';

console.log(str.split('').reverse().join('') == str ? true : false);