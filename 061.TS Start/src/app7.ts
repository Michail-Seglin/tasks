// 10. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

// let factorial: number = 1;

// let youNum: number = +prompt();

// for (let i = 1; i <= youNum; i++) {
//     factorial *= i;
// }

// alert(factorial)

function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1)
}
const f = factorial(5);
console.log(f);
