// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE
const obj = {
    1: 'misha',
    2: 232,
    3: 'seg',
    4: 'bmw',
    5: 2323
};
(function (obj_) {
    let newObj = {};
    for (let key in obj_) {
        if (!isNaN(obj_[key])) {
            newObj[key] = obj[key]
        }
    }
    console.log(newObj);
})(obj);
