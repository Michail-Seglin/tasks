// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {
    str;

    isMail(str) {
        try {
            if (!/^[\w\.\-]+@[a-z]{1,10}\.(by|com)$/gm.test(str)) throw new Error('Невалидный EMAIL');
            return true
        } catch (er) {
            return er.message
        }
    }
}
const validator = new Validator();
const email = validator.isMail('misha_hp@tut.by');
console.log(email);

