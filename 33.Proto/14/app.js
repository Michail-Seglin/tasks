// 14. По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ? 

const btn = document.querySelector('button');
const inp = document.querySelector('input');
function isValid() {
    if (inp.value == '') throw new Error('empty');
}
btn.addEventListener('click', function () {
    try {
        const div = document.querySelector('div');
        isValid();
        div.innerHTML = inp.value.replaceAll(' ', '').toUpperCase().split('').join('  ');
    } catch (error) {
        alert(error.message)
    }
})