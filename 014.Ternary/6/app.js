// Найти квадратный корень числа. Если же число без плавающей точки, то просто 
// вывести его. В противном случае необходимо округлить число до целых. Добавить 
// проверку на ввод только чисел
let a = prompt();
b = Math.sqrt(a);
if (isNaN(a)) {
    console.log('Ошибка ввода');
}
else {
    a = Number(a);
    if (Number.isInteger(b)) {
        console.log(b);
    }
    else {
        console.log(Math.round(b));
    }
}