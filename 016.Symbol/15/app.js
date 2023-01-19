// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua
const str = 'fullstack';
let a = '';
for (let i = 0; i < str.length; i++) {
    if (
        str[i] == 'o' ||
        str[i] == 'u' ||
        str[i] == 'i' ||
        str[i] == 'e' ||
        str[i] == 'a') { 
            a += str[i];
        }
} console.log(a);