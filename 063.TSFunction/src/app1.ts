// 1. У вас есть массив объектов вида приведенного в приложении.Необходимо
// вывести все товары, количество которых больше 10

interface iStorage {
    id: number;
    title: string;
    count: number;
    price: number
}

const obj: iStorage[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function find(obj: iStorage[]): iStorage[] {
    const filtered: iStorage[] = obj.filter((el: iStorage) => {
        if (el.count > 10) return el
    })
    return filtered
}

const res: iStorage[] = find(obj)

console.log(res);


