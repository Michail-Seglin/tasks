// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива
const btn = document.querySelector('button');
let arr = [];

function isValid(inp) {
    if (inp.value.trim() === '') throw new Error('empty');
    if (isNaN(inp.value)) throw new Error('not number')
}
btn.addEventListener('click', function () {
    try {
        let inp = document.querySelector('input');
        let div = document.querySelector('.array');
        let divAvg = document.querySelector('.avg');

        isValid(inp)

        arr.push(inp.value);
        div.innerHTML = arr;

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        divAvg.innerHTML = sum / arr.length

        inp.value = '';
    } catch (error) {
        alert(error.message)
    }
})