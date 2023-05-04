const express = require('express');
const { getAllData, getDataById, createData, updateData } = require('./service.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    const data = getAllData();
    response.send(data);
})

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const data = getDataById(id);
    response.send(data);
})

app.post('/', (request, response) => {
    const { name, age } = request.body;
    const data = createData(name, age);
    response.send(data);

})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const data = updateData(id, name, age);
    res.send(data);
})

app.listen(3000, () => {
    console.log('Server is running');
})

// 4. На сервере есть файл сервисов. В нем глобально хранится массив. Прописать
// логику так, чтобы при get запросе отправлялся ответ клиенту с массивом внутри
// тела

