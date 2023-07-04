// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle();
rectangle.height = 10;
rectangle.width = 5;
console.log(rectangle.getArea());
