// 4. Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке

const str14: string[] = "misha is man".split(' ');
let maxLength: number = str14[0].length;
let maxStr: string = str14[0];
for (let i = 0; i < str14.length; i++) {
    if (str14[i].length > maxLength) {
        maxStr = str14[i];
        maxLength = str14[i].length;
    }
}
console.log(maxStr);
