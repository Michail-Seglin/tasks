// Найти значение массива, повторяющееся в нем наибольшее количество раз
const arr = [1, 1, 2];
let obj = {};
let arrValue = [];
let n0 = 0;
let a = 0;
for (let i = 0; i < arr.length; i++) {
    n0 = 0;
    arr.forEach(function (el) {
        if (arr[i] == el) {
            n0++
        }
    })
    obj[arr[i]] = n0;
}
for (let key in obj) {
    arrValue.push(obj[key]);
    if (obj[key] == Math.max(arrValue)) {
        a = key;
    }
}
console.log(a);
console.log(obj);