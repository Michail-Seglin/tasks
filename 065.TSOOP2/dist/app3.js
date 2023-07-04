// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.
class Friut {
}
class Apple extends Friut {
    constructor() {
        super(...arguments);
        this.array = [{ id: 1, title: 'apple', price: '2000' },
            { id: 2, title: 'pineapple', price: '10000' },
            { id: 3, title: 'orange', price: '4000' }];
    }
    getAppleInfo() {
        const filtered = this.array.filter((el) => el.title === 'apple');
        return filtered;
    }
}
const apple = new Apple();
console.log(apple.getAppleInfo());
