// Преобразуйте первую букву каждого слова строки в верхний регистр.
const str = 'java python javascript'.trim().split(' ');
let res = '';
for (let i = 0; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}
console.log(res);