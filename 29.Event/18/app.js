const n = 5;
function doStr(n_) {
   let str = '';
    for (let i = 0; i < n_; i++) {
        str += prompt();
    } return str
}

function isValid(str_) {
    if (isNaN(str_)) throw new Error('Не число')
}

function main(str_) {
    try {
        isValid(str_)
        let newStr = str.split('').reverse().join('')
        return newStr
    } catch (error) {
        return error.message
    }
}
let str = doStr(n);
let res = main(str);
console.log(res);