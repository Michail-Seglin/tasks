// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.
const a = +prompt('Введите число a');
const b = +prompt('Введите число b');
const c = +prompt('Введите число c');
let d =b ** 2 - 4 * a * c;
if (d < 0) {
    console.log('Дискриминант меньше 0');
}
else if (d == 0) { console.log(-b / (2 * a)); }
else if (d > 0) {
    console.log((-b + Math.sqrt(d)) / (2 * a));
    console.log((-b - Math.sqrt(d)) / (2 * a));
}
