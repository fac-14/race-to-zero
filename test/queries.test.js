// go tests
const dbConnection = require('../db/db_connection'); 
const challengeDetails = require('../src/model/challengeDetail')

describe('Can select all from challenges', done =>{
    dbConnection().then(
        challengeDetails
    )
})

