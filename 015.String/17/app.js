// На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true
const str =prompt('я очень хороший текст').trim().toLowerCase();
if (str.includes('хорош')) {
    console.log('хороший текст');
}else
console.log('не хороший текст');