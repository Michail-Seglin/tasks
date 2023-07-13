// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае

// function isPalindrome(word: string) {
//     try {
//         if (word.trim().toLowerCase().split('').reverse().join('') == word) {
//             return true
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// export { isPalindrome }


function isPalindrome(word: string | number): boolean {
    try {
        if (!word) throw new Error(`word is empty`)
        if (typeof word == 'number') throw new Error(`word don't have number`)

        return word.trim().toLowerCase().split(``).reverse().join(``) == word.trim().toLowerCase() ? true : false

    } catch (err) {
        return err.message
    }
}

// // 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// // число n и возвращает его факториал.
function calculateFactorial(n: any): number {
    try {
        if (!n) throw new Error('empty')
        if (typeof n !== 'number') throw new Error('this is not number')
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i;
        }
        return res
    } catch (er) {
        return er.message
    }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: string): string {
    const newStr = str.split(' ');
    let temp = '';
    for (let i = 0; i < newStr.length; i++) {
        temp += newStr[i][0].toUpperCase() + newStr[i].slice(1) + " ";
    }
    return temp.trim()
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива
class StringArray {
    array: string[] = ['sdfs', 'df', 'wedwedwedwedw'];

    getLongestWord(): string {
        let temp = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (temp.length < this.array[i].length) {
                temp = this.array[i];
            }
        } return temp
    }

    getUniqueWords(): string[] {
        const arr: string[] = []
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].includes(this.array[i])) {
                arr.push(this.array[i])
            }
        }
        return arr
    }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
    arr: number[] = [1, 2, 3, 4, 5];
    getSum(): number {
        const sum = this.arr.reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum
    }

    getEventNumbers(): number[] {
        let newArr: number[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % 2 === 0) {
                newArr.push(this.arr[i])
            }
        }
        return newArr
    }
}


export { isPalindrome, calculateFactorial, capitalizeString, StringArray, NumberArray }



