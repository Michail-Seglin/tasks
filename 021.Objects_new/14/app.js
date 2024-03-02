// На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 1 : 1, 1 : 1,
// 2 : 2, 2 : 2,
// 3 : 2, 3 : 3,
// 4 : 3, -> 4 : 4,
// 5 : 4, 5 : 5
// 6 : 4 }
// 7 : 5
// }

const obj = {
    0: 7,
    1: 3,
    2: 5,
    3: 2,
    4: 4,
    5: 1,
    6: 2,
};
let obj2 = {};
let arr = [];
for (let key in obj) {
    arr.push(obj[key]);

}
arr = arr.sort();
let uniq = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniq.includes(arr[i])) {
        uniq.push(arr[i])
    }
}
for (let i = 0; i < uniq.length; i++) {
    obj2[i] = uniq[i];
}
console.log(obj2);