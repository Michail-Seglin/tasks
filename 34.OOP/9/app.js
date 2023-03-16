// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
    str;
    url;

    isMail(str) {
        try {
            if (!/^[\w\.\-]+@[a-z]{1,10}\.(by|com)$/gm.test(str)) throw new Error('Невалидный EMAIL');
            return true
        } catch (er) {
            return er.message
        }
    }
    isURL(url) {
        try {
            if (!/^[a-z]+:\/\/[a-zA-Z0-9]+\.[a-z]+\.[a-z]{1,3}$/gm.test(url)) throw new Error('Некорректный URL');
            return true
        } catch (er) {
            return er.message
        }
    }
}
const validator = new Validator();
const email = validator.isMail('misha_hp@tut.by');
console.log(email);

const url = validator.isURL('https://www.onliner.by')
console.log(url);