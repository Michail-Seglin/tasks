// У вас есть кнопка. После каждого нажатия менять background.

const btn = document.querySelector('button');
let flag = false;
btn.addEventListener('click', function () {

    if (flag === false) {
        btn.style = 'background-color:red';
        flag = true;
    } else {
        btn.style = 'background-color:white';
        flag = false
    }
})