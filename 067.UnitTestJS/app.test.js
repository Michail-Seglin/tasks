const { doDegree, multiply, doProduct, doUnique } = require('./app');

describe('doDegree:', () => {
    test('', () => {
        const result = doDegree(2, 3);
        expect(result).toBe(8)
    })

    test('', () => {
        const result = doDegree('2', '3');
        expect(result).toBe("arguments aren't numbers")
    })

    test('', () => {
        const result = doDegree(2, '3');
        expect(result).toBe("arguments aren't numbers")
    })

    test('', () => {
        const result = doDegree('2', 3);
        expect(result).toBe("arguments aren't numbers")
    })
})

describe('multiply:', () => {
    test('', () => {
        const result = multiply([1, 2, 3]);
        expect(result).toBe(6)
    })

    test('', () => {
        const result = multiply([1, '2', 3]);
        expect(result).toBe('elements array not a number')
    })

    test('', () => {
        const result = multiply([]);
        expect(result).toBe('array is empty')
    })

    test('', () => {
        const result = multiply(undefined);
        expect(result).toBe('this not array')
    })
})

describe('doProduct', () => {
    const arr = [
        { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
        { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
        { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
        { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ]

    test('', () => {
        const result = doProduct(arr);
        expect(result).toEqual([{
            id: 2,
            title: 'Смартфон',
            count: 33,
            price: 1500,
            producer: 'Германия'
        },
        {
            id: 7,
            title: 'Холодильник',
            count: 11,
            price: 2400,
            producer: 'Германия'
        }])
    })

    test('', () => {
        const item = arr;
        item[0].count = '10';
        const result = doProduct(item);
        expect(result).toBe('count must be a number')
    })
})

describe('doUnique', () => {
    const arr = [`+375291111111`, `+375292222222`, `+375292222222`, `+375293333333`, `+375293333333`]
    test('', () => {
        const result = doUnique(arr);
        expect(result).toEqual([`+375291111111`, `+375292222222`, `+375293333333`])
    })
})