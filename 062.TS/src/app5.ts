// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2

const arrNum1: number[] = [1, 2, 3, 4, 5, 6, 7];

const filtered: number[] = arrNum1.filter((el) => el % 3 === 0 && el % 2 !== 0);
console.log(filtered);
