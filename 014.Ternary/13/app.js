// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 – чет
const num = prompt();
if (isNaN(num)) {
    console.log('NaN');
} else {
    if (num.repeat(0) % 2 === 0)
        console.log('четное');
}
