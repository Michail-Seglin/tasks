// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    n;
    doHashtag(n) {
        try {
            let arr = [];
            for (let i = 0; i < n; i++) {
                // a = prompt('Введите значение');
                arr.push(`#` + prompt());

            } return arr
        } catch (er) {
            return er.message
        }
    }
}
const hashtag = new Hashtag();
const res = hashtag.doHashtag(5)
console.log(res);
