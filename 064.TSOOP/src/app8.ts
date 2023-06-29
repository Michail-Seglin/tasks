// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

interface iCircler {
    radius: number;
    getArea(): number;
}

class Circler {
    public radius;

    getArea() { return 3.14 * this.radius ** 2 }
}

const circler: iCircler = new Circler();
circler.radius = 11;

console.log(circler.getArea());

