// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
var Circlec = /** @class */ (function () {
    function Circlec() {
    }
    Circlec.prototype.setRadius = function (radius) {
        if (typeof radius === 'number')
            this.radius = radius;
    };
    Circlec.prototype.getCircumference = function () { return 2 * 3.14 * this.radius; };
    return Circlec;
}());
var circlec = new Circlec();
circlec.setRadius(+prompt());
console.log(circlec.getCircumference());
