// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100

function randomNum() {
    return function () {
        console.log(Math.floor(Math.random() * 100));
    }
}
const res = randomNum();
res()
res()
res()
res()
res()
