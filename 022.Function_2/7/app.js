// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива
const arr = [1, 2, 4, 6];
function showResult(arr_) {
    let count = 0;
    for (let i = 0; i < arr_.length; i++) {
        if (!isNaN(arr_[i])) {
            continue;
        } else {
            count += 1;
        }
    }
    if (count > 0) {
        return false;
    } else return true;
}

const res = arr.reduce(function (sum, el) {
    return  sum + el
}, 0)


console.log(res);