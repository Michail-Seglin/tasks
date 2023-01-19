// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых
const num = prompt('Input number');
num_sqr = Math.sqrt(num);
if (num >= 0) {
    console.log(`Округление до целого:${Math.round(num_sqr)} 
    \ Округление до десятых:${Math.round(num_sqr * 10) / 10}
    \ Округление до сотых:${Math.round(num_sqr * 100) / 100}`);

} else console.log('Number less 0');