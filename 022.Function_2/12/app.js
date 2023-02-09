// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае
const str = 'anna';

function pol(str_) {
    const strRevers = str_.split('').reverse();
    strRevers === str_ ? true : false;
}
let res = pol(str);
console.log(res);