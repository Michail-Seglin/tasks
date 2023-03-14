// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки
class WordString {

    isValid(str) {
        if (!isNaN(str)) throw new Error('It\'s number')
    }
    reverseString(str) {
        try {
            this.isValid(str)
            console.log(str.split('').reverse().join(''));
        } catch (error) {
            console.log(error.message);
        }
    }

    upperFirst(str) {
        try {
            this.isValid(str)
            console.log(str[0].toUpperCase() + str.slice(1))
        } catch (error) {
            console.log(error.message);
        }
    }

    upperEvery(str) {
        try {
            this.isValid(str)
            let words = str.split(' ');
            let newWords = '';
            for (let i = 0; i < words.length; i++) {
                newWords += words[i][0].toUpperCase() + words[i].slice(i) + ' ';
            }
            return newWords
        } catch (error) {
            return error.message
        }
    }
}

const wordString = new WordString()
wordString.reverseString('Misha');
wordString.upperFirst('daddy');

const upper = wordString.upperEvery('hello rev');
console.log(upper);
