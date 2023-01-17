// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки
const str = prompt('Введите строку из 3 слов').trim().toLowerCase();
if(isNaN(str)) {
    let str_sl = str.slice(' ').slice(1);

    console.log(str.indexOf(str_sl[0]));
console.log(str.length, str_sl);
} else console.log('error');
 
console.log(str.slice(' ').length);


