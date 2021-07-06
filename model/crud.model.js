'use strict'

const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({

    strDrink: String,
    strDrinkThumb: String,
    idDrink : String

})

const drinkModel = mongoose.model('drinks',drinkSchema);

module.exports = drinkModel;

