// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false
const str = prompt();
if (isNaN(str)) {
    if (str == 'hschool') {
        console.log(true);
    } else console.log(false);
} else if (str % 2 == 0){console.log('Четное');}
else console.log('Нечетное');