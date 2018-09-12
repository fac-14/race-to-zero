/* eslint-disable */

const supertest = require('supertest');
const app = require("../src/app.js") 

describe("Test the root", () => {
    test("It should respond to the GET method", done => {
        supertest(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe("Test the dashboard page", () => {
    test("Expecting a 200 status return", done =>{
        supertest(app)
        .get('/dashboard/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe("Test the challSelect page", () => {
    test("Expecting a 200 status return", done =>{
        supertest(app)
        .get('/challSelect/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe("Test the inventory page", () => {
    test("Expecting a 200 status return", done =>{
        supertest(app)
        .get('/inventory/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe("Test the error-route page", () => {
    test("Expecting a 500 status return", done =>{
        supertest(app)
        .get('/make-error/')
        .then(response => {
            expect(response.statusCode).toBe(500);
            done();
        })
    })
})

describe("Test an incorrect route for 404", () => {
    test("Expecting a 404 status return", done =>{
        supertest(app)
        .get('/armandisgreat/')
        .then(response => {
            expect(response.statusCode).toBe(404);
            done();
        })
    })
})
