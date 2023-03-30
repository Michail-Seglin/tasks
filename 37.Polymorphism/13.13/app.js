// 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах. 
class Calculator {
    n;
    setN(n) {
        this.n = n;
    }
    doSqrt() {
        let a = Math.sqrt(this.n)
        return a
    }
}
const calculator = new Calculator();
calculator.setN('9');
const res = console.log();
console.log(res);