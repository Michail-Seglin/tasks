// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

const n = 10;
let arr1 = [];
let arr2 = [];
for (let i = 0; i < n; i++) {
    let a = prompt();
    if (i < 5) {
        arr1.push(a);
    } else arr2.push(a);
}
let arr1Str = arr1.sort();
let arr2Str = arr2.sort();
if (arr1Str.join('') === arr2Str.join('') ) {
    console.log(true);
}else console.log(false);