// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter
const n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
    let a = prompt('');
    if (a == '') {
        continue
    } else { arr.push(a) };

}
const arrNew = arr.filter(function (el) {
    if (!isNaN(el)) {
        return true
    } else { return false }
})

if (arrNew.length == 0) {
    console.log('Массив пуст');
} else console.log(arrNew);

