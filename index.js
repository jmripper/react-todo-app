const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

var fakeTodos = [{
    id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
    text: 'Learn about React Ecosystems',
    isCompleted: false,
    createdAt: new Date(),
}, {
    id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
    text: 'Get together with friends',
    isCompleted: false,
    createdAt: new Date(Date.now() - 86400000 * 7),
}, {
    id: '2e538cc5-b734-4771-a109-dfcd204bb38b',
    text: 'Buy groceries',
    isCompleted: true,
    createdAt: new Date(Date.now() - 86400000 * 14),
}];

const app = express();

app.use(bodyParser.json());
app.use(cors());

//ROUTES
// The route for getting a list of all todos
app.get('/todos', (req, res) => {
    res.status(200).json(fakeTodos);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})