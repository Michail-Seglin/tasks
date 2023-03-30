// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута

function isValid(inp) {
    if (isNaN(inp)) throw new Error('value not a number')
    if (inp <= 0) throw new Error('your value bad')

}
document.querySelector('button').addEventListener('click', () => {
    try {
        const inp = document.querySelector('input');
        isValid(inp.value);
        document.querySelector('div').innerHTML = +inp.value * 2;
        inp.value = '';
        inp.style = `border:1px solid black`
    } catch (er) {
        alert(er.message)
        inp.value = '';
        inp.style = `border:1px solid red`
    }
})