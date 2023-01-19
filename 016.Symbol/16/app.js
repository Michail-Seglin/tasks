// . На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const str = 'hSСhOol СomPAnY'.trim().toLowerCase().split('');
let str_v = '';
if (isNaN(str)) {
    for (let i = 0; i < str.length; i++)
       {    
        if (str[i] != ' ') {
            str_v += str[i];
        }
    }
} else console.log('error');
console.log('#'+ str_v);