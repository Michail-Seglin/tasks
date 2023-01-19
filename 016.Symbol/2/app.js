// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false
const str = prompt('1 строка');
const str1 = prompt('2 строка');
if (str.includes(str1)) {
    console.log(true);
}
else {
    console.log(false);
}