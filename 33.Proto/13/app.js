// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE
const obj = {
        1: 'misha',
        2: 232,
        3: 'seg',
        4: 'bmw',
        5: 2323
};
(function (obj_) {
        let res = 0;
        for (let key in obj_) {
                {
                        if (obj_[key]) {
                                res++
                        }
                }
        } return console.log(res);
})(obj);

