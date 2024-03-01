// .На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter
const n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
    let a = prompt();
    if (!isNaN(a)) {
        arr.push(a)
    }
}

const res = arr.filter(function (el) {
    if (el > 0) {
        return true
    } else { return false }
})
console.log(res);