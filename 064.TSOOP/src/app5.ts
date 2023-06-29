// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.

interface iRectangle {
    width: number;
    height: number;
    getArea(): number;
}

class Rectangle {
    public width;
    public height;

    getArea() {
        return this.width * this.height
    }
}

const rectangle: iRectangle = new Rectangle();

rectangle.height = 10;
rectangle.width = 5;

console.log(rectangle.getArea());
