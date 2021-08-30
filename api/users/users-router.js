const router = require('express').Router();
const Dash = require('../users/users-model');

router.get('/', (req,res ) => {
    Dash.find()
    .then(dash => {
        res.json(dash)
    })
    .catch(err => res.send(err))
})

module.exports = router; 