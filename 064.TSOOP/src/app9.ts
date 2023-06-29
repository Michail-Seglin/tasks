// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

interface iCirclec {
    radius: number;
    setRadius<T>(radius: T): void;
    getCircumference(): number;
}

class Circlec {
    public radius: number;

    setRadius<T>(radius: T): void {
        if (typeof radius === 'number') this.radius = radius;
    }
    getCircumference(): number { return 2 * 3.14 * this.radius }
}

const circlec: iCirclec = new Circlec();
circlec.setRadius<number>(+prompt());
console.log(circlec.getCircumference());
