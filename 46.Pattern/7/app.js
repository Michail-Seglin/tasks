// 7. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо вывести все числа кратные 3 
const arr = [];
document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input');
    const div1 = document.querySelector('.arr');
    const div2 = document.querySelector('.arr3');

    arr.push(inp.value);
    div1.innerHTML = arr;
    div2.innerHTML = arr.filter(el =>  el % 3===0)
})