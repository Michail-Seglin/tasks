// 1. Посчитать количество гласных и согласных в строке
const vowel = 'AEIOU'.toLowerCase();
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inp = document.querySelector('input').value
    countVowel = 0;
    for (let i = 0; i < inp.length; i++) {
        if (vowel.includes(inp[i])) {
            countVowel += 1;
        }

    }
    const countCons = inp.length - countVowel;
    document.querySelector('.count').innerHTML = `Количество гласных ${countVowel}`;
    document.querySelector('.countTwo').innerHTML =`Количество coгласных  ${countCons}`;
})