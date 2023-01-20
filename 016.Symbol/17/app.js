// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр

const str = 'all_sell_bad'.trim().split('_');
let res = '';
for (let i = 0; i < str.length; i++) {
    if (i==0){
        res +=str[i]
    }else  res += str[i][0].toUpperCase() + str[i].slice(1) ;
}
console.log(res);