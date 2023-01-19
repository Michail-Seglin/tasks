// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false
const str = 'anna'.trim().toLowerCase();
const reversestr  = str.split('').reverse().join('');
if (str === reversestr) {
    console.log(true);
}else console.log(false);