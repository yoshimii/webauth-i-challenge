const db = require('../data/dbConfig.js');

 module.exports = {
     register, 
    //  login,
    //  getUsers
 }

 function register(userInfo) {
    return db('users')
        .insert(userInfo, 'id')
        // .then(ids => {
        //     const [id] = ids;
        //     return findById(id);//returns new user by id
        //   });
 }