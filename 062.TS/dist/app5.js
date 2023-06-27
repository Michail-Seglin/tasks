// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2
var arrNum1 = [1, 2, 3, 4, 5, 6, 7];
var filtered = arrNum1.filter(function (el) { return el % 3 === 0 && el % 2 !== 0; });
console.log(filtered);
