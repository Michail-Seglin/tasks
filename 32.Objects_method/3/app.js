// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values
const obj = {
    id: 1,
    name: 'misha'
}
const str = 'misha';
function foundStr(obj_, str_) {
    try {
        const arr = Object.values(obj_);
        if (!arr.includes(str_)) throw new Error('no matches found')
    return true
    } catch (error) {
        return error.message;
    }

}
const res = foundStr(obj, str);
console.log(res);
