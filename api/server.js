const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./data/db-config');
const router = require('./auth/auth-router');

const mainRoutes = require('./auth/auth-router');
app.use(mainRoutes);

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api');

server.get("/", (req, res) => {
  res.status(200).json({ message: process.env.MOTD });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.get('/api/users', (req,res)=>{
  Users.find()
  .then(users=>{
      res.status(200).json(users)
  })
  .catch(err=>{
      res.status(500).json({message: err.message})
  })
})

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

module.exports = server;
