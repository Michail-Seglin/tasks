const express = require('express');
const { getAllEnvironment,
    getEnvironmentByID,
    createEnvironment,
    updateEnvironment,
    deleteEnvironment } = require('./service');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


app.get('/', (request, response) => {
    try {

        const data = getAllEnvironment();
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getEnvironmentByID(id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

app.post('/', (request, response) => {
    try {
        const { label, category, priority } = request.body;
        const data = createEnvironment(label, category, priority);
        response.status(201).send(data)
    } catch (error) {
        response.status(405).send(error.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateEnvironment(id, label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteEnvironment(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }

})

app.listen(3000, () => {
    console.log('Server is running');
})
