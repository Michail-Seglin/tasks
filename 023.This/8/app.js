// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение)
const obj = {
    name: 'misha',
    age: '1',
    country: 'Belarus'
};
let res = 0;
for (let key in obj) {
    if (obj[key]) {
        res++;
    }
} console.log(res);