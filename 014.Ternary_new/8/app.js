// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)
const a = +prompt('Введите номер');
switch (a) {
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сентябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;

    default:
        console.log('Ошибка ввода');
}
if (a == 1) {
    console.log('Январь');
}
else if (a == 2) {
    console.log('Февраль');
}
else if (a == 3) {
    console.log('Март');
}
else if (a == 4) {
    console.log('Апрель');
}
else if (a == 5) {
    console.log('Май');
}
else if (a == 6) {
    console.log('Июнь');
}
else if (a == 7) {
    console.log('Июль');
}
else if (a == 8) {
    console.log('Август');
}
else if (a == 9) {
    console.log('Сентябрь');
}
else if (a == 10) {
    console.log('Октябрь');
}
else if (a == 11){
    
    console.log('Ноябрь');
}
else if (a==12){
    console.log('Декабрь');
}

else{
console.log('Ошибка ввода');}