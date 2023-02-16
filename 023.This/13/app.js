// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str = 'konus'.split('').sort();
const str1 = 'sukno'.split('').sort();
function isAnnagramma(str_, str1_) {
        return str_.join('') == str1_.join('') ? true : false;
}
const res = isAnnagramma(str, str1);
console.log(res);