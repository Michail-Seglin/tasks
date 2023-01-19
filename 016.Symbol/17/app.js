// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр
const str = 'all_sell_bad_'.split('_');
let strUp = '';
console.log(strUp);
for (let i = 1; i < str.length; i++) {
    str[i][0].toUpperCase()
    strUp += i;
}

// console.log(strUp);
console.log(str);