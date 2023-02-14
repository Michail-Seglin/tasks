// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const num = 3;

function isValid(arr_) {
    let res = arr_.every((el) => typeof el === 'number' ? true : false);
    return res
};


function doArr(num_) {

    let arr = []
    for (let i = 0; i < num; i++) {
        let a = +prompt('Введите элемент массива')
        arr.push(a);
    }
    return arr;
}

function multiply(arr_) {
    let valid = isValid(arr_)
    if (valid === true) {
        let res = arr_.reduce((sum, el) => sum * el, 1);
        return res;
    } else return 'error'
};
let arr = doArr(num);
let res = multiply(arr);
console.log(res);