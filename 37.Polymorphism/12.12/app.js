// 12. Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
    email;
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    isEmail() {
        try {
            if (!/^[\w\.]+\@[\w]+\.[a-z]+$/gm.test(this.email))
                throw new Error('not a email');
            return true;
        } catch (er) {
            return er.message
        }
    }
}

const validator = new Validator();
validator.isEmail('mishahp@tut.by');
let res = validator.isEmail();
console.log(res);


// class Validator {
//     constructor(email) {
//         this.email = email;
//     }
//     getEmail() {
//         return this.email;
//     }
//     setEmail(email) {
//         this.email = email;
//     }
//     isEmail() {
//         try {
//             if (!/^[\w\.]+\@[\w]+\.[a-z]{2,}$/gm.test(this.email))
//                 throw new Error('not a email');
//             return true;
//         } catch (er) {
//             return er.message
//         }
//     }
// }

// const validator = new Validator('mishahp@tut.by');
// validator.isEmail();
// let res = validator.isEmail();
// console.log(res);