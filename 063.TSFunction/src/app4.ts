// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

interface iStorage {
    id: number;
    title: string;
    count: number;
    price: number;
}

const obj4: iStorage[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function find4(obj4: iStorage[]): number {
    const reduceObj: number = obj4.reduce((sum: number, el: iStorage) => {
        return el.count * el.price + sum
    }, 0)
    return reduceObj
}

const res4 = find4(obj4)

console.log(res4);