// Найдите минимальное значение в массиве используя цикл
const arr = [1, 34, 23, -4]
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
} console.log(min);