// Create a REST API endpoint to retrieve all users from a MySQL database table called "users". The endpoint should return a JSON array of user objects that contain the user's ID, username, and email address.


const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'mydatabase'
})


app.get('/users', (req,res) => {

    const sql = 'SELECT ID, USERNAME, EMAIL FROM USERS';
    
    const connection.query(sql, (error,results) => {

        if (error) return res.status(500).send('Error Retrieving the Data from the Database.');

        if (results.length === 0) {
            return res.status(404).send('Resource Not Found.')
        }

        return res.json(results);
    });

});


// Create a REST API endpoint to retrieve a single user by their ID.
// The endpoint should accept a parameter for the user ID and return a JSON object containing the user's ID, username, and email address.


const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'mydatabase'
})

app.get('/users/:id', (req,res) => {

    const id = req.params.id

    const sql = 'SELECT ID, USERNAME, EMAIL FROM USERS WHERE ID = ?';
    
    const connection.query(sql, [id], (error,results) => {

        if (error) return res.status(500).send('Error Retrieving the Data from the Database.');

        if (results.length === 0) {
            return res.status(404).send('Resource Not Found.')
        }

        return res.json(results);
    });
});

// Create a REST API endpoint to add a new user to the "users" table. 
//The endpoint should accept a JSON object containing the new user's username and email address. 
//Upon success, the endpoint should return the newly created user object including the user's ID.

app.use(express.json());
app.post('/users', (req,res) => {

    const { username, email } = req.body;

    const sql = 'INSERT INTO USERS (username,email) VALUES (?,?)';

    connection.query(sql, [username,email], (error,results) => {
        if (error) return res.status(500).send('Error Retrieving the Data from the Database.');

        if (results.length === 0) {
            return res.status(404).send('Resource Not Found.')
        }

        return res.json(results)
    })

})


// Create a REST API endpoint to update an existing user in the "users" table. 
//The endpoint should accept a JSON object containing the user's ID, username, and email address. 
//The endpoint should update the corresponding record in the "users" table and return the updated user object.


app.use(express.json());

app.put('/users/:id', (req,res) => {
    const id = req.params.id;
    const {username, email} = req.body;
    const sql = 'UPDATE USERS SET USERNAME=?, EMAIL=? WHERE ID=?';

    connection.query(sql, [username,email, id], (error,results) => {
        if (error) return res.status(500).send('Error Retrieving the Data from the Database.');

        if (results.length === 0) {
            return res.status(404).send('Resource Not Found.')
        }

        return res.json(results)
    })


})
