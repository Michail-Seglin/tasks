// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки
const str = prompt('Введите строку из 3 слов').trim().toLowerCase();
let strSl = str.split(" ").slice(1);
console.log();
console.log(`Количество символов в этой строке: ${str.replaceAll(' ','').length}`);
console.log(`2 и 3 слово: ${str.split(" ").slice(1)}`);
console.log(`индекс 2 подстроки: ${str.indexOf(strSl[0])}`);

