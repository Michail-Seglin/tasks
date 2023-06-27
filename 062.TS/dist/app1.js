// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
var numArr = [1, 2, 3, 4, 5, 6];
var filteredArr = numArr.filter(function (el) { return el % 2 !== 0 ? true : false; });
var reduceArr = filteredArr.reduce(function (sum, el) { return el + sum; }, 0);
console.log(reduceArr);
