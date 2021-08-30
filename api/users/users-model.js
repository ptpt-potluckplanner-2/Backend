const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = require('../../api/data/db-config');

function find() {
    return db('users').select("id", "username", "password", "organizer", "guest")
}

function findBy(filter) {
    console.log(filter)
    return db('users').where(filter)
}


async function add(user) {
    const [ id ] = await db("users").insert(user)
    return findById(id)
}

function findById(id) {
    return db('users').where({ id }).first();
} 

module.exports = {
    add,
    find,
    findBy,
    findById,
};
