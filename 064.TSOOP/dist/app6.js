// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () { return this.a + this.b; };
    Calculator.prototype.subtract = function () { return this.a - this.b; };
    Calculator.prototype.multiply = function () { return this.a * this.b; };
    Calculator.prototype.divide = function () { return this.a / this.b; };
    return Calculator;
}());
var calculator = new Calculator();
calculator.a = +prompt();
calculator.b = +prompt();
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
