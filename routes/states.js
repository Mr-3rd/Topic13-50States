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

// set a patch route to set wether a state has been visited
router.patch('/states/:name', function (req,res,next) {
    // collect the state name and visited status
    let stateName = req.params.name
    let stateVisited = req.body.visited

    // create the express call that will update the database
    States.update({visited: stateVisited}, {where: {name: stateName}})
        .then( rowsUpdated => {
            // if there are any rows that were updated,
            if( rowsUpdated[0] ) {
                // send that ok response that the DB has been updated
                return res.send('ok')
            } else {
                // if the state does not exist, send
                return res.status(404).send('State not found')
            }
        }). catch( err => next( err ))


})

// return the data from the routes
module.exports = router