// С помощью цикла while найдите сумму чисел от 1 до 100.
let count = 0;

// for (let i = 1; i <= 100; i++) {
//     count += i;
// } console.log(count);

// let i = 1;
// while (i <= 100) {
//     count += i;
//     i++
// } console.log(count);

let i = 1;
do {
    count += i;
    i++;
} while (i <= 100);
console.log(count);