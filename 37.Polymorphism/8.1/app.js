// 1. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]
const n = 4;
function doArr() {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('Введите элементы массива'));
    }
    return arr
}

function main(arr_) {
    try {
        let newArr = arr_.filter((el) => el[0] === 'a' || el[0] === 'h')
        return newArr
    } catch (er) {
        er.message
    }
}
const arr = doArr(n);
const res = main(arr);
console.log(res);