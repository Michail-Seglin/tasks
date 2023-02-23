// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать
const str = 'helloMisha';
function isValid(str_) {
    try {
        let replaceStr = str_.replaceAll(/ /gm, '!')
        console.log(replaceStr);
        if (str_.length !== replaceStr.length) throw new Error('Длина Изменилась');
        return true
    } catch (error) {
        return error.message
    }
}
let res = isValid(str)
console.log(res);