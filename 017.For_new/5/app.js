// Найдите максимальное значение в статичном массиве используя цикл
let arr = [-3, 5, 6, 7, 34];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
         max = arr[i] }
}console.log(max);
