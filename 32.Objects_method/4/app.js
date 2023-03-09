// 4. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей. 
const obj = {};
function doObject(obj_) {
    for (let i = 0; i < 5; i++) {
        obj_[i] = i;
    }
    return obj_
}
const objNew = doObject(obj);

function findEvenKeys(objNew_) {
    try {
        const arr = Object.keys(objNew_);

        const evenKeys = arr.filter(el) => el % 2 === 0 )
        if (!arr.length) throw new Error('emty')
        return evenKeys;

    } catch (error) {
        return error.message;
    }
}
const res = findEvenKeys(objNew);
console.log(res);