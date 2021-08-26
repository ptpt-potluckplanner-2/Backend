const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../../users/user-model.js");
const { JWT_SECRET } = require('../auth/secrets.js');

router.post("/register", (req, res) => {
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 8);
    newUser.password = hash;

    Users.add(newUser)
    .then((saved) => {
        return res.status(201).json(saved);
    })
    .catch((err) => {
        return res.status(500).json({ err });
    });
});

router.post("/login", (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
    .first()
    .then(users => {
        if (users && bcrypt.compareSync(password, users.password)){
            const token = generateToken(users)
            res.status(201).json({
                message: `Welcome ${users.username}`,
                token: token
            })
        } else {
            res.status(404);
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
        });
})

router.put("/:id/update", (req, res, next) => {
      const { id } = req.params;
      let changes = req.body;
      const hash = bcrypt.hashSync(changes.password, 8);
      changes.password = hash;
  
      Users.editUser(changes, id)
        .then(() => {
          res.status(200).json({ message: "User updated successfully" });
        })
        .catch(e => {
          next(e);
        });
    }
  );

// may put the following generatedtoken in its own component! line 66 - 77 and import it in
function generateToken(users){
    const payload = {
        subject: users.id,
        username: users.username,
        password: users.password,
        role: users.role || 'undefined'
    }
    const options = {
        expiresIn: '2h'
    } 
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router 