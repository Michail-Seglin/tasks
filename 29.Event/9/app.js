// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

function doArray() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt())
    } 
    return arr
};

function arrCallback(arr_) {
    let n = 10;
    let arrNew = [];
    for (let i = 0; i < arr_.length; i++) {
        if (arr_[i] > n) {
            arrNew.push(arr_[i])
        }
    }
    return arrNew
};
let arr = doArray();
let res = arrCallback(arr);

console.log(res);