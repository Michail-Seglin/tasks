// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true, 
// в противном случае false (isNaN)
const a = prompt();
if (isNaN(a)) {
    console.log(false);
}
else {
    console.log(true);
}
isNaN(a) ? console.log(true): console.log(false);;