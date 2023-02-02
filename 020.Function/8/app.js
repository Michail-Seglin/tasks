// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach
const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

const res = arr.every(function (el) {
    if (!isNaN(el)) {
        return true
    }
    else return false
})
console.log(res);

arr.forEach(function (el) {
    if (!isNaN(el)) {
        count++
    }

})

if (count === arr.length) {
    console.log(true);
} else {
    console.log(false);
}