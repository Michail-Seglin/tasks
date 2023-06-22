// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
const str8: string = 'misha';
let newStr: string = '';

for (let i = 0; i < str8.length; i += 2) {
    newStr += str8[i] + " ";
}
console.log(newStr);
