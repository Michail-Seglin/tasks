// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false
// const str = 'df@.com';
// if (str.indexOf('@') >= 0 && (str.lastIndexOf('.ru') >= 0|| str.lastIndexOf('.com') >= 0)) {
//     console.log(true);
// } else console.log(false);

const str = 'df@.om'.toLowerCase();

if (str.includes('@') && (str.endsWith('.ru') || str.endsWith('.com'))) {
   str;
    console.log(true);
} else console.log(false);

