const db = require('../data/db-config');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
}

function get(){
    return db('potluck')
}

function getById(id){
    return db('potluck')
    .where({ id })
    .first()
}

function insert(potluck){
    return db('potluck')
    .insert(potluck)
    .then(ids => {
        return getById(ids[0])
    })
}

function update(id, changes){
    return db('potluck')
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db('potluck')
    .where('id', id)
    .del()
} 