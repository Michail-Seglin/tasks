// 4. Реализуйте класс Pwd. Pwd хранит функцию showPwd, которая формирует и
// возвращает рандомно сгенерированный пароль из 8 чисел. Класс Validation
// является производным по отношению к базовому, родительскому Pwd и
// содержит функцию showPwd. Необходимо переопределить showPwd из базового
// класса и записать в переменную используя метод super. Далее дополняем
// переопределенный метод отображением результата в console.
class Pwd {
    showPwd() {
        const array = [];
        for (let i = 0; i < 5; i++) {
            array.push(Math.round(Math.random() * 10));
        }
        return array.join('')
    }
}

class Validation extends Pwd {
    isValid() {
        if (isNaN(res)) throw new Error('not a number')
    }
    showPwd() {
        try {
            const res = super.showPwd();
            console.log(res);
        } catch (er) {
            return er.message
        }
    }
}

const validation = new Validation();
validation.showPwd()