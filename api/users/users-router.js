const router = require('express').Router();
const Users = require('../users/users-model');

router.get("/", (_, res, next) => {
    Users.getAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(e => {
        next(e);
      });
  });
  
  router.get("/:id", validateUserId, (req, res, next) => {
    const { id } = req.params;
  
    Users.getById(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(e => {
        next(e);
      });
  });
  
  router.use((error, req, res, next) => {
    res.status(500).json({
      info: "Error occurred inside usersRouter",
      message: error.message,
      stack: error.stack,
    });
  });
module.exports = router; 