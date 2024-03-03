// 20.Пользователь вводит строку. Необходимо посчитать количество гласных
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] % 2 == 0)) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// while (i < arr.length) {
//     if (arr[i] % 3 == 0 || arr[i] % 4 == 0) {
//         if (sum <= 12) {
//             sum += arr[i];
//         } else {
//             break
//         }
//     }
//     i++
// }

// const res = arr.reduce((el, res) =>res + el, 0)

function sum(arr) {
    if (arr.length > 10) return;
    let sum1 = 0;
    sum1 += arr[i];
    i++;
    sum();
}

sum(arr);


