// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество 
const obj = {
    name: 'Misha',
    age: 27,
    year: 1996,
    month: 2,
    day: 9,
};
let count = 0;
for (let key in obj) {
    if (!isNaN(obj[key])) {
        count++
    }
} console.log(count);