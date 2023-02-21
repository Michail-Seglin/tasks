// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки
const str = 'hello Misha';

function findLetter(str_) {
    let letter = '1';
    let count = 0;
    for (let i = 0; i < str_.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    return count
};
let res = findLetter(str);
console.log(res);