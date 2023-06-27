// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
const obj5 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function maxPrice(obj5) {
    let resMax = obj5[0].price;
    for (let i = 0; i < obj5.length; i++) {
        if (obj5[i].price > resMax) {
            resMax = obj5[i].price;
        }
    }
    return resMax;
}
console.log(maxPrice(obj5));
