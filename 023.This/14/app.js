// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива
const arr = [1, 2, 5, 7, -3, -6, 34];
function isValid(arr_) {
    const bool = arr.every((el) => !isNaN(el) ? true : false);
    return bool;
}

function searchMax(arr_) {
    const bool = isValid(arr_);
    if (bool === true) {
        let ind = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (ind < arr[i]) {
                ind = arr[i];
            }
        }
        return ind
    }
    return bool
};

const res = searchMax(arr);
console.log(res);