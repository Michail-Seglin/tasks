// 1.	На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести true, если совпадение есть, в противном случае false 
const str1 = prompt('').trim().toLowerCase();
const str2 = prompt('').trim().toLowerCase();

if (str1.includes(str2)) {
    console.log(true);
}
else console.log(false);

console.log(str1.includes(str2)) ? console.log(true) : console.log(false);;;