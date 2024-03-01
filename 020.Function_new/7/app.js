// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам
const arr = ['hschool', 'hschool_0', 'hschool_1'];
// let arrLast = arr.pop();
// let arrFirst = arr.shift();
// console.log(arr[0], arr.reverse()[0]);
// console.log(arrFirst, arrLast);

for (let i = 0; i < arr.length; i++) {
    if (i == 0 || (i == arr.length - 1)) {
        console.log(arr[i]);
    }
}