// Напишите программу для пересчёта величины временного интервала, заданного
// в минутах, в величину, выраженную в часах и минутах:
// Пример:
// 150 => 2 час 30 минут
// 50 => 0 час 50 минут
// 240 => 4 час 0 минут
const a = +prompt();
console.log(Math.trunc(a / 60), 'час', a % 60, 'минут');