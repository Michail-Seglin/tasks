// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции
function doStr() {
    let str = '';
    return function () { };

}
let res = doStr();
res('a')
res('fd')
res('dfsa')
res('er')
res('df')