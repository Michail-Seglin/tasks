// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @
function Task3() {
    const arr = ['asd', 'asd@f', '23r']
    return (<>
        {arr.filter((el) => <p>{el.includes('@')}</p>)}</>)

}

export default Task3