// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const arr = [
    'mannu.ch@gmail.com',
    'hero2231@gmail.com',
    'karanboka@gmail.com',
    'bokachoodatui@gmail.com',
    'dekholoduniya.yaha@gmail.com',
    'dekholoduniya.yaha@gmail.com'
]

function deleteDuplicate(arr: string[]) {
    let newArr: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) { newArr.push[i] };
    }
    return newArr
}
console.log(deleteDuplicate(arr));
