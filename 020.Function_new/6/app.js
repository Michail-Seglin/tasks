// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
const res = arr.some(function (el) {
    if (!isNaN(el)) {
        return true;
    } else {
        return
        false
    }
})
console.log(res);