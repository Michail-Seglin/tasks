// . *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить проверки на ввод числа (значение
// n не должно быть больше длины массива, 0, пустая строка, строковый тип данных).
// Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
const arr = [1, 2, 3, 4, 5, 6];
const arrDub = [1, 2, 3, 4, 5, 6];
let n = 0;
let arr21 = [arr[0], arr[1]];
let arr22 = [arr[2], arr[3]];
let arr23 = [arr[4], arr[5]];
let arr2 = [];
arr2.push(arr21)
arr2.push(arr22)
arr2.push(arr23)
for (let i = 0; i < arr.length; i++) {
    if (i < 2) {
        arr21.push(arr[i])
    }
    else if (i >= 2 && i < 4) {
        arr22.push(arr[i]);
    }
    else if (i >= 4) { arr23.push(arr[i]); }
}

console.log(arr2);
