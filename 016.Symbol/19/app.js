// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5 
const str = 'АааГГЦЦцТТтттА'.toLowerCase();
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
        case 'а': a += 1;
            break;
        case 'г': b += 1;
            break;
        case 'ц': c += 1;
            break;
        case 'т': d += 1;
            break;
    }

} console.log(`А - ${a}, Г - ${b}, Ц -  ${c}, Т - ${d}`);