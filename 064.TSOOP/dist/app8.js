// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2
var Circler = /** @class */ (function () {
    function Circler() {
    }
    Circler.prototype.getArea = function () { return 3.14 * Math.pow(this.radius, 2); };
    return Circler;
}());
var circler = new Circler();
circler.radius = 11;
console.log(circler.getArea());
