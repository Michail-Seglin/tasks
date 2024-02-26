// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы
const str = prompt('Введите школу').trim().toLowerCase();

if (!isNaN(str)) {
    console.log(false);
} else {
    if (str==='hschool'){
        console.log(true);
    }
    else {
    console.log('nothschool');}
}

