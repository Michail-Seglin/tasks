// На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней
const str = prompt('Input string').trim().split(' ');
if (isNaN(str)){
    console.log(`Количество слов в строке ` + str.length);
}else {console.log('Error');}


console.log(isNaN(str) ? `Количество слов в строке ` + str.length :  'Error');