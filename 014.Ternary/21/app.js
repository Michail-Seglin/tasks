// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста
const str = prompt('Input string').trim().split("");
if (isNaN(str)){
    console.log(str);
}else console.log('Error input');