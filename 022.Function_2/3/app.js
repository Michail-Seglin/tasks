// Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company
const str = 'hschool company'.split(' ');
function showResult(str_) {
    let strUP = '';
    for (let i = 0; i < str_.length; i++) {
        strUP += str_[i][0].toUpperCase() + str_[i].slice(1) + ' ';
    }
    return strUP;
}
let result = showResult(str);
console.log(result);