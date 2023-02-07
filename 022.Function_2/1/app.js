// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»
const name = prompt('Input name'),
    surname = prompt('input surname');

function show_result(name_, surname_) {
    return `Привет, ${name_} ${surname_}`;
}
let result = show_result(name, surname);
console.log(result);