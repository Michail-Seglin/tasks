// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doDegree(a, b) {
    try {
        if (typeof a != 'number' || typeof b != 'number')
            throw new Error("arguments aren't numbers")
        return a ** b
    } catch (error) {
        return error.message
    }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function multiply(array) {
    try {
        if (!Array.isArray(array)) throw new Error('this not array')

        if (array.length === 0) throw new Error('array is empty')

        const data = array.filter((el) => {
            if (typeof el != 'number')
                return true
        })

        if (data.length > 0) throw new Error('elements array not a number')

        const res = array.reduce((sum, el) => { return el * sum }, 1)
        return res
    } catch (error) {
        return error.message
    }
}

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function doProduct(arr) {
    try {

        let item = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i].count != 'number') throw new Error('count must be a number');
            if (typeof arr[i].producer != 'string') throw new Error('producer must be a string');
            if (arr[i].count > 10 && arr[i].producer === 'Германия') {
                item.push(arr[i])
            }
        }
        return item
    } catch (error) {
        return error.message
    }
}

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции
function doUnique(arr) {
    try {
        const uniqueArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i])
        }
        return uniqueArr
    } catch (error) {
        return error.message
    }
}

module.exports = { doDegree, multiply, doProduct, doUnique }
