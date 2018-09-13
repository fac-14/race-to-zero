// go tests

const db = require('../db/db_connection');
const initialiseTestDatabase = require('../db/test_build');

// const runDbTestBuild = require('../db/test_build');
// const pg = require('pg');

beforeEach(() => initialiseTestDatabase());
afterAll(() => db.$pool.end());

describe('Test DB is generating', () => {
    test('getting a result db', done => {
            .then(res => {
            console.log('passed db build')
            expect(res).toBeTruthy();
            done();
        })
            .catch(err => {
                console.log('err building db');
            })
    })
})