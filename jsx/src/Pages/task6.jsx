// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+=

function Task6() {
    const pwd1 = 'misha123757574$';
    const pwd2 = 'misha123$%$'

    function validator() {
        if (pwd1.length < 8) {
            console.log('password is short');
            return
        }
        if (!/[0-9a-zA-Z]+[\!\@\#\$\%\^\&\*\+\=]/gm.test(pwd1)) {
            console.log('incorrect');
            return
        }
        if (pwd1 != pwd2) {
            console.log('pwd do not math');
            return
        }
       console.log('pwd ok');
    }

    return (
        <>
            <button onClick={validator}>button</button></>
    )
}

export default Task6
