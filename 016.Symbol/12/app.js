// На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'.
const str = prompt('Input number');
if (str > 2 && str < 11 || str >= 26 && str < 30) {
    console.log(true);
}else console.log(false);
console.log(str > 2 && str < 11 || str >= 26 && str < 30 ? true : false);