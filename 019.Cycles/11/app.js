// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива
const arr = [1, 5, 'fg', 23, null, true, 7];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        newArr += arr[i];
    }
} console.log(newArr.split(''));