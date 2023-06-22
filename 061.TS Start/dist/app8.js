// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
var str8 = 'misha';
var newStr = '';
for (var i_1 = 0; i_1 < str8.length; i_1 += 2) {
    newStr += str8[i_1] + " ";
}
console.log(newStr);
