const db = require('../data/dbConfig.js');

 module.exports = {
     register, 
     login,
    findBy,
     getUsers
 }

 function register(userInfo) {
    return db('users')
        .insert(userInfo, 'id')
 }

 function login(userInfo) {
     return db('users')
        .insert(userInfo, 'id')
 }
 function getUsers() {
    return db('users')
        .select('id', 'username', 'password')
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .first()
}