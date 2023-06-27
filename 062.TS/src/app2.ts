// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a.
const str: string | string[] = 'afad fgrg dasd rfws'.split(' ');
const newStr: string[] = [];
for (let i = 0; i < str.length; i++) {
    if (str[i].includes('a'){
        newStr.push(str[i])
    })
}