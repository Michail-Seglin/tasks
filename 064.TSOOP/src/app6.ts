// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

interface iCalculator {
    a: number;
    b: number;

    add(): number;
    subtract(): number;
    multiply(): number;
    divide(): number;
}

class Calculator {
    public a;
    public b;

    add() { return this.a + this.b }

    subtract() { return this.a - this.b }

    multiply() { return this.a * this.b }

    divide() { return this.a / this.b }
}

const calculator: iCalculator = new Calculator();

calculator.a = +prompt();
calculator.b = +prompt();
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());



