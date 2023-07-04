// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

interface iFruit {
    id: number;
    title: string;
    price: string;
}

abstract class Friut {
    abstract array: iFruit[];
}

class Apple extends Friut {
    array: iFruit[] = [{ id: 1, title: 'apple', price: '2000' },
    { id: 2, title: 'pineapple', price: '10000' },
    { id: 3, title: 'orange', price: '4000' }];

    public getAppleInfo(): iFruit[] {
        const filtered: iFruit[] = this.array.filter((el) => el.title === 'apple');
        return filtered
    }
}

const apple = new Apple();
console.log(apple.getAppleInfo());
