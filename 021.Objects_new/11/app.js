// На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел

const obj = {
    avg: 0,
};
const num1 = +prompt('Input number 1');
const num2 = +prompt('Input number 2');
if ((!isNaN(num1)) && (!isNaN(num2))) {
    let res = (num1 + num2) / 2;
    obj.avg = res;
    console.log(obj);
} else console.log('error input');

