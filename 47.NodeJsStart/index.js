const { resolve4 } = require('dns');
const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();


app.get('/', (request, response) => {
    const arr = [1, 2, 3, 4, 5, 3, 2, 1];
    const arrUniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arrUniq.includes(arr[i])) {
            arrUniq.push(arr[i])
        }
    }
    response.send(arrUniq);
})

app.get('/about', (request, response) => {
    response.send('Hi, this is about route')
})

app.get('/contact', (request, response) => {
    response.send('Hi, this is contact route')
})

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const arr = [1, 2, 3, 4, 5, 6];
    const arrRes = [];
    let itemArr = [];
    for (let i = 0; i < arr.length; i++) {
        itemArr.push(arr[i]);
        if (id == itemArr.length) {
            arrRes.push(itemArr);
            itemArr = [];
        }
    }
    response.send(arrRes)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

