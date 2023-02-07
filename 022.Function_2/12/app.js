// . На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел
const obj = {};
let arr = [];
const n = 5;
for (let i = 0; i < n; i++) {
    let a = prompt();
    if (!isNaN(a)) {
        arr.push(+a);
    }

}
let res = arr.reduce(function (sum, el) {
    return sum + el;
}, 0)
obj.sum = res;
console.log(obj);