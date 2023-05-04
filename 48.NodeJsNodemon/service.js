const arr = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
];

function getAllData() {
    return arr
}

function getDataById(id) {
    const filtered = arr.filter(el => el.id == id);
    return filtered;
}

function createData(name, age) {
    const newObject = {
        name: name,
        age: age
    }
    arr.push(newObject);
    return arr
}

function updateData(id, name, age) {
    const filtered = arr.filter(el => el.id != id)
    if (filtered.length == arr.length) return 'id not found';
    const newObject = {
        id: id,
        name: name,
        age: age
    }
    filtered.push(newObject);
    return filtered
}

module.exports = { getAllData, getDataById, createData, updateData };