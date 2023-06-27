// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface iStyle {
    name: string;
    value: number
}

const obj9: iStyle[] = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];

function doObject(obj9: iStyle[]) {
    const obj = {};
    for (let i = 0; i < obj9.length; i++) {
        obj[obj9[i].name] = obj9[i].value
    }
    return obj
}

console.log(doObject(obj9));
