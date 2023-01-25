// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
const num = prompt('Input number');
let a = Math.trunc(num/100);
let b = Math.trunc((num - a*100)/10);
let c = num%10;
console.log('Сумма цифр', a+b+c);
console.log('Произведение', a*b*c);