const express = require('express');

const cors = require('cors');

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/drinks', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors());

app.use(express.json());


const PORT = process.env.PORT

const getApiData = require('./controller/api.controller')

const { creatDrink, getDrink, deleteDrink, updateDrink } = require('./controller/crud.controller')

app.get('/', (req, res) => {
    res.send('it is work')
});

app.get('/drinks', getApiData);

app.post('/drink', creatDrink);
app.get('/drink', getDrink);
app.delete('/drink/:idDrink', deleteDrink);
app.put('/drink/:idDrink', updateDrink);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});