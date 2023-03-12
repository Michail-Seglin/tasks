// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const arr = [];

function isValid() {
    if (inp.value.trim() === '') throw new Error('emty');
    if (isNaN(inp.value)) throw new Error('not number');
}

btn.addEventListener('click', function () {
    try {
        const divArray = document.querySelector('.array');
        const divObj = document.querySelector('.object');
        isValid();
        arr.push(inp.value);
        divArray.innerHTML = arr;
        inp.value = '';
        const obj = {};
        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i];
        }
        divObj.innerHTML = JSON.stringify(obj);
    } catch (error) {
        alert(error.message)
    }
})