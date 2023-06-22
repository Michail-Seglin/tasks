// 5. Напишите программу, которая находит сумму всех чисел от 1 до 100 и выводит
// результат в консоль
// let count: number = 0;
// for (let i = 0; i <= 100; i++) {
//     count += i;
// }
// console.log(count);
function sum(n) {
    if (n === 1)
        return 1;
    return n + sum(n - 1);
}
console.log(sum(100));
