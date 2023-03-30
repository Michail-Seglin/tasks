// 11. Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

// class WordString {
//     constructor(str) {
//         this.str = str;
//     }
//     reverseString() {
//         const rev = this.str.split('').reverse().join('');
//         return rev
//     }
// }

// const wordString = new WordString();

// console.log(wordString.reverseString());

class WordString {
    str;

    setStr(str) {
        this.str = str;
    }

    getStr(str) {
        this.str;
    }
    reverseString() {
        const rev = this.str.split('').reverse().join('');
        return rev
    }
}

const wordString = new WordString();
wordString.setStr('misha')
const res = wordString.reverseString();
console.log(res);