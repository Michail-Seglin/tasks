// import { useState, useCallback } from "react";

// // 5. Создайте компонент, который позволяет пользователю добавлять и удалять
// // элементы из списка. Используйте useCallback, чтобы оптимизировать функции
// // добавления и удаления элементов.
// const UseCallback5 = () => {
//     const [value, setValue] = useState('qwe', 'sdsd', '3qdqw')
//     const [inp, setInp] = useState('');

//     function add() {
//         setValue([...value, inp])
//         setInp('')
//     }

//     function del(e) {
//         const filtered = value.filter((el) => el != e.target.id);
//         setValue(filtered);
//     }

//     return (
//         <>
//             <input value={inp} onChange={(e) => setInp(e.target.value)} ></input>
//             <button onClick={add}>add</button>
//             <div>{value.map((el)=><div><span>{el}</span><button id={el} onClick=)}</div>
//             {value.map((el, index) => (
//                 <p key={index}>
//                     {el}
//                     <button id={el} onClick={del}>del</button>
//                 </p>
//             ))}
//         </>
//     )
// }

// export default UseCallback5
