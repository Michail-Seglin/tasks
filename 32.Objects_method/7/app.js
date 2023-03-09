// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1
// 0+2
// 1+3
// 2+4
// 3+5
// 4

const str = '1234567';
function main(str_) {
    let count = 0;
    for (let i = 0; i < str_.length; i++) {
        count += str_[i] ** i;
    }
    return count;
}
const res = main(str);
console.log(res);