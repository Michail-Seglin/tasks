// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч. 
// Определите, через какое время автомобили встретятся, если расстояние между 
// ними равно S км. Добавить проверку на ввод только чисел
const v1 = +prompt('Введите скороссть 1');
const v2 = +prompt('Введите скороссть 2');
const s = +prompt('Введите расстояние');
let t = s / (v1 + v2);

if (isNaN(v1, v2, s)) {
    console.log('Ошибка ввода');
}
else {
    console.log(t.toFixed(2));
}