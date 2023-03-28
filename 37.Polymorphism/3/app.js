// 3. Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива
class NumberArray {
    sumArr() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.round(Math.random() * 10));
        }
        return arr
    }
}
class ConsoleArray extends NumberArray {
    sumArr() {
        const res = super.sumArr();
        const result = res.reduce((sum, el) => sum + el, 0)
        return result;
    }
}
const consoleArray = new ConsoleArray();
const response = consoleArray.sumArr();
console.log(response);