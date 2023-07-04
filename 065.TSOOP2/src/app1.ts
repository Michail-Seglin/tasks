// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)

abstract class Shape {
    abstract calculateArea(height: number, width: number): number;

}


// class Rectangle extends Shape {//1 способ решения
//     height: number;
//     wigth: number;
//     calculateArea() {
//         return this.height * this.wigth;
//     }
// }

// const rectangle = new Rectangle();
// rectangle.height = 5;
// rectangle.wigth = 2;
// console.log(rectangle.calculateArea());



// class Rectangle extends Shape {//2й способ решения
//     calculateArea(height: number, width: number):number {

//     }
// }

// const rectangle = new Rectangle();

// console.log(rectangle.calculateArea(10, 5));


class Rectangle extends Shape {//3й способ решения 
    calculateArea<A>(height: number, width: number): number {
        if (typeof (height) === 'number' && typeof (width) === 'number') { return height * width }
    }
}

const rectangle = new Rectangle();

console.log(rectangle.calculateArea(10, 5))