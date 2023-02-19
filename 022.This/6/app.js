// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = 5;
function doArray(n_) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        let a = prompt('input value');
        arr.push(a);
    } return arr;
}

function showLength(array_) {
    return array_.length;
}
let array = doArray(n);
let result = showLength(array);
console.log(result);