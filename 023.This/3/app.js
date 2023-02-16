// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае
let email = 'misha@.com'
function doEmail(email_) {
    let obj = {};
    if (email_.includes('@') && (email_.includes('.ru') || email_.includes('.com'))) {
        obj.email = email_;
        obj.active = true
    } else {
        obj.email = email_
        obj.active = false
    }
    return obj;
};

let res = doEmail(email);
console.log(res);
