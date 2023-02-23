// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать
const str = 'https://regex101.com';

function isValid(str_) {
    try {
        if (/^[a-z]+:\/\/[a-zA-Z0-9]+\.[a-z]+$/gm.test()) throw new Error('Не Подходит')
        return true
    } catch (error) {
        return error.message
    }
}
const res = isValid(str);
console.log(res);