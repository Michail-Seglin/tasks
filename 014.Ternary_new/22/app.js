// Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l
const str = prompt('Input string')
if (isNaN(str)) {
    console.log(str.trim().toLowerCase().split("").join('-'));
} else console.log('error input');