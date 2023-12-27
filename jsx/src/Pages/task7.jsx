// 2. По событию изменения input отображать в консоль каждое вводимое значение

function Task7() {

    function show(event) {

        console.log(event.target.value);
    }

    return (
        <>
            <input onChange={show}></input>
        </>
    )
}

export default Task7