// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map
const n = prompt('Input number of elements');
let arr = [];
let arrEvenUneven = [];
for (let i = 0; i < n; i++) {
    let a = prompt('Input element');
    if (!isNaN(a)) {
        arr.push(a);
    }
}
const res = arr.map(function (el) {
    if (el % 2 == 0) {
        arrEvenUneven.push('чет')
    } else arrEvenUneven.push('нечет')
})
console.log(arrEvenUneven);
console.log(arr);