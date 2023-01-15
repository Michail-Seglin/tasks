// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)

const str = prompt('');
if (isNaN(str)){
    console.log(str.replace('@','!'));
}
else {
    console.log('error');
}

console.log(isNaN(str) ? str.replace('@','!'):'error');
if (isNaN(str)){
    console.log(str.split('@').join('!'));
}
else {
    console.log('error');
}
console.log(isNaN(str) ? str.split('@').join('!'):'error');