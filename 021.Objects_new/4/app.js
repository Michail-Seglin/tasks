// На входе статичный объект. Необходимо вывести все четные значения объекта.
const obj = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
};

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        console.log(obj[key]);
    }

}