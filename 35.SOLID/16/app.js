// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const obj = {
    n1: 0,
    n2: 0,
    n3: 0,
    n4: 0,
    n5: 0,
};
let arr = [];
for (let key in obj) {
    let a = prompt('input number');
    if (!isNaN(a)) {
        obj[key] = a;
        arr.push(obj[key]);
    }
}
console.log(arr);
