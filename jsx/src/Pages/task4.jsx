// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>

function Task4() {

    const strArr = ['arr', 'ss', 'ae', 'a'];
    return (
        <>
        <div>
            {strArr.map((el)=(<div><p>{el}</p><img src='.'></img></div>))}
        </div>
        </>
    )
}

export default Task4