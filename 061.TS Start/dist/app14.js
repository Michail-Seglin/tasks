// 4. Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке
var str14 = "misha is man".split(' ');
var maxLength = str14[0].length;
var maxStr = str14[0];
for (var i_1 = 0; i_1 < str14.length; i_1++) {
    if (str14[i_1].length > maxLength) {
        maxStr = str14[i_1];
        maxLength = str14[i_1].length;
    }
}
console.log(maxStr);
