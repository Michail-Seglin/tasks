// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив
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
