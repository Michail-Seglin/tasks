// Пользователь вводит строку. Вывести первый символ строки (индексы) 
const str = prompt('Input string').trim().split('');
if (isNaN(str)){
    console.log(str[0]);
}else console.log('error');