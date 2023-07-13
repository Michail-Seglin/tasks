// import {isPalindrome}  from './app'

// describe('isPalindrome:', () => {
//     test('', () => {
//         const result = isPalindrome('anna');
//         expect(result).toBe('true')
//     })
// })

import { isPalindrome, calculateFactorial, capitalizeString, StringArray, NumberArray } from './app'

// task 1
describe(`isPalindrome:`, () => {
    test(``, () => {
        const result = isPalindrome(`шалаш`);
        expect(result).toBe(true);
    })
    test(``, () => {
        const result = isPalindrome(``);
        expect(result).toBe("word is empty");
    })
    test(``, () => {
        const result = isPalindrome(5325);
        expect(result).toBe("word don't have number");
    })
})
//task2
describe('calculateFactorial:', () => {
    test('', () => {
        const result = calculateFactorial(5);
        expect(result).toBe(120);
    })

    test('', () => {
        const result = calculateFactorial('anna');
        expect(result).toBe('this is not number');
    })
    test('', () => {
        const result = calculateFactorial('');
        expect(result).toBe('empty');
    })

})

//task 3

describe('capitalizeString:', () => {
    test('', () => {
        const result = capitalizeString('hello im misha')
        expect(result).toBe('Hello Im Misha')
    })
})

//task 8

describe('StringArray', () => {
    test('', () => {
        const stringArray = new StringArray();
        const result = stringArray.getUniqueWords()
        expect(result).toEqual(['sdfs', 'df', 'wedwedwedwedw'])
    })

    test('', () => {
        const stringArray = new StringArray();
        const result = stringArray.getLongestWord();
        expect(result).toEqual('wedwedwedwedw')
    })
})

describe('NumberArray', () => {
    test('', () => {
        const numberArray = new NumberArray();
        const result = numberArray.getSum()
        expect(result).toEqual(15)
    })

    test('', () => {
        const numberArray = new NumberArray();
        const result = numberArray.getEventNumbers()
        expect(result).toEqual([2, 4])
    })
})
