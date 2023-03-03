// Необходимо отобразить кнопку с надписью «Нажми на меня» и
//  пустой инпут. По клику на кнопку вызвать alert и
//  отобразить сообщение из значения инпута
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        if (inp.value.trim() === '') throw new Error('Пустая строка')
        alert(inp.value);
    } catch (error) {
        alert(error.message)
    }
}) 