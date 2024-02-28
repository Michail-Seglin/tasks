// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке
const num = 1;
let row = '';
if (!isNaN(num)) {
    for (let i = num - 1; i >= 0; i--) {
        row += num - i;
    } console.log(row);

} else console.log('input error');



