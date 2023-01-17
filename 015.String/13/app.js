// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.
const date = prompt('дату в формате xxxx-xx-xx');
console.log(date.split('-').join('.').concat('.'));