// Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

const str = 'happy new year'.split(' ');

function showResult(str_) {
    let res = str.map(function (el, index) {
        if (index % 2 == 0) {
            return el.toLowerCase();
        } else return el.toUpperCase();
    })
    return res;
}
let result = showResult(str);
console.log(result);