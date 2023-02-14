// . На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
const num = 8;

function isValid(num_) {
    return typeof (num_) == 'number' ? true : false;
}


function fact(num_) {
    const bool = isValid(num_);
    let count = 1;
    if (bool === true) {
        for (let i = 1; i <= num_; i++) {
            count *= i;
        } return count;
    } else 'error';
}
const res = fact(num);
console.log(res);