// На входе число n. Напишите функцию, которая переворачивает число.
const n = '12';
function rev(n_) {
    let nR = n.split('').reverse().join('');
    return nR
};
const res = rev(n);
console.log(res);