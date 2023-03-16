// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url.
// Дополнить класс Validator. Добавить метод isDate для проверки на дату.
//  Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.
class Validator {
    str;
    url;
    date;
    phone;

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

    isDate(date) {
        try {
            if (!/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm.test(url)) throw new Error('Некорректная Дата');
            return true
        } catch (er) {
            return er.message
        }
    }

    isPhone(phone) {
        try {
            if (!/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm.test(url)) throw new Error('Некорректная Дата');
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

const date = validator.isDate('20.1.2023');
console.log(date);
const phone = validator.isPhone('+375297654842')
console.log(phone); 