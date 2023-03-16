// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {
    constructor(n) {
        this.n = n;
    }

    findChet() {
        let arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(~~(Math.random() * 10) + 1)
        }
        const doChet = arr.filter((el) => el % 2 === 0)

        return `${doChet} ${doChet.length}`
    }
}
const mathСalculation = new MathСalculation(10);
const res = mathСalculation.findChet();
console.log(res);
