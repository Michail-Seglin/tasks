// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while
const arr = [2, 5, 9, 15, 0, 4];
let newArr = [];

 let i = 0;
 while (i < arr.length) {
     if (arr[i] % 5 == 0 && arr[i] != 0) {
        newArr.push(arr[i])
     }
     i++
 } console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0 && arr[i] != 0) {
//         newArr.push(arr[i])
//     }
// } console.log(newArr);