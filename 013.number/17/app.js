// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится' и результат деления, иначе 
const a = +prompt('Введите число');
const b = +prompt('Введите число');
if (a % b == 0) {
    console.log('Делится');
}
else {
    console.log('Делится с остатком', a % b);
}