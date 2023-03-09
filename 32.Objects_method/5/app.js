// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 
const obj = {};
const n = 11;

function doObj(obj_, n_) {
    for (let i = 0; i < n_; i++) {
        obj_[i] = i;
    }
    return obj_
}
const objAuto = doObj(obj, n);

function main(objAuto_) {
    try {
        if (!Object.keys(objAuto_).includes('10')) throw new Error('нет 10')
        return true
    } catch (error) {
        return error.message;
    }

}
const res = main(objAuto);
console.log(res);