'use strict'

const   axios  = require("axios")

const getApiData = (req,res)=>{

axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(info=>{

const data = info.data.drinks;
res.json(data);

}).catch(err=>{
    console.log(err);
})

}

module.exports = getApiData;