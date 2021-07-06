'use strict'

const drinkModel = require('../model/crud.model')

const creatDrink = (req, res) => {

  const { strDrink, strDrinkThumb, idDrink } = req.body

  drinkModel.findOne({ idDrink: idDrink }, (error, data) => {

    if (error) {
      res.send(error)
    } else if (data) {
      res.send('already exist')
    } else {

      data = new drinkModel({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        idDrink: idDrink
      })

      data.save()
      res.send(data);

    }
  })
}


const getDrink = (req, res) => {

  drinkModel.find((error, data) => {
    if (error) {
      res.send(error)
    } else { res.send(data); }
  })
}

const deleteDrink = (req, res) => {

  const idDrink = req.params.idDrink

  drinkModel.remove({ idDrink: idDrink }, (error, data) => {

    if (error) {
      res.send(error)
    }

  }).then(() => {

    drinkModel.find((error, data) => {
      if (error) {
        res.send(error)
      } else { res.send(data); }
    })

  })
}


const updateDrink = (req, res) => {
  
  const { strDrink, strDrinkThumb } = req.body
  const idDrink = req.params.idDrink
  drinkModel.findOne({ idDrink: idDrink }, (error, data) => {

    if (error) {
      res.send(error)
    } else {

      data.strDrink = strDrink
      data.strDrinkThumb = strDrinkThumb
      data.save()
    }
  }).then(() => {
    drinkModel.find((error, data) => {
      if (error) {
        res.send(error)
      } else { res.send(data); }
    })

  })
}

module.exports = { creatDrink, getDrink, deleteDrink , updateDrink };