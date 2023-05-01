let express = require('express')

// import the states model
let States = require('../models').States

let router = express.Router()

// create the action that gets all the state data sorted by name
router.get('/states', function (req, res, next){
    States.findAll( {order: ['name']}).then( states => {
        return res.json(states)
    }).catch(err => next(err) )
})

// return the data from the routes
module.exports = router