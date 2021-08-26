const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secrets.js');


module.exports = (req, res, next) => {
    const { authorization } = req.headers

    if (authorization){
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(404).json({message: 'You must be logged in', err})
            } else {
                req.decodedToken = decodedToken
                next();
            }
        })
    } else {
        res.status(500).json({message: '500 error'})
    }
} 