// 20.Пользователь вводит строку. Необходимо посчитать количество гласных
const str = prompt('Input string').trim().toLowerCase().split('');
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'e' || str[i] == 'u' || str[i] == 'o' || str[i] == 'a' || str[i] == 'i') {
        count += 1;
    }
}
console.log(str.join(''));
console.log(`Количество гласных: ${count}`);
