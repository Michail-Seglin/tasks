// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt('Input numbers of elements');
let arr = [];

for (let i = 0; i < n; i++) {
    let el = +prompt('Input element');

    if (!isNaN(el)) {
        arr.push(el)
    }
}
const res = arr.reduce(function (sum, el) {
    return sum + el
}, 0)
console.log(res);

let resFor = 0;
const res1 = arr.forEach(function (el) {
    resFor += el
})
console.log(resFor);