// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console
class Pwd {
    showPwd() {
        let pwd = '';
        for (let i = 0; i < 8; i++) {
            pwd += Math.round(Math.random() * 10);
        }
        return pwd;
    }
}
class Validation10 extends Pwd {
    showPwd() {
        const result = super.showPwd();
        console.log(result);
        return result.split('').reverse().join('');
    }
}
const pwd = new Pwd();
const validation10 = new Validation10();
console.log(pwd.showPwd());
console.log(validation10.showPwd());
