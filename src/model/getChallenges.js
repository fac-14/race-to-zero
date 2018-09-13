/* eslint-disable */
const db = require('../../db/db_connection'); 

const getChallenge = () => new Promise((resolve,reject)=>{
        db.query(`SELECT * FROM challenges;`)
        .then(res=>{
            resolve(res)
        })
        .catch(err => reject(err))
    })
  
    module.exports = getChallenge;