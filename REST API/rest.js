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

// Create a REST API endpoint to delete an existing user from the "users" table. 
//The endpoint should accept a parameter for the user ID and delete the corresponding record from the "users" table. 
//Upon success, the endpoint should return a message indicating that the user has been deleted.


app.delete('/users/:id', (req,res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM USERS WHERE ID = ?';

    connection.query(sql, [id], (error,results) => {

        if (error) return res.status(500).send('Error Deleting the Data from the Database.');

        return res.status(200).send('Resource was deleted successfully.');
    })
})



Users
Id int pk
Username varchar
Password varchar

Products
Id int pk
productName varchar
productDescription varcar

Orders
Id Int PK
customerId FK -> UserID
productId fk -> Product
Price int 


// CreateProduct
// CreateOrders
// GetAllOrderByProductName
// GetAllProductsbyUsername


const express = require('express');
const app = express();

const { Client } = require('pg')

const connection = new Client ({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    db: 'mydatabase',
    port: 5432
})


// CreateProduct

app.post('/products', (req,res) => {

    const { productName, productDescription } = req.body;

    const sql = 'INSERT INTO Products (productName, productDescription) VALUES ($1, $2)';

    connection.query(sql, [productName, productDescription], (error, results) => {

        if (error) return res.status(500).send('Error Creating a New Product');
        
        return res.json(results)

        // return res.status(201).send('Product Created Successfully.')
        // return res.status(201).json({message: 'Resource created successfully', data: results});
        // return res.status(201).json(results);

    } )
})


// CreateOrders

app.use(express.json());
app.post('/orders', (req,res) => {
    const { customerId, productId, price } = req.body;

    const sql = 'INSERT INTO Orders (customerId, productId, price) VALUES ($1,$2,$3)';

    connection.query(sql, [customerId, productId, price], (error, results) => {
        if (error) return res.status(500).send('Error Creating a New Order');

        res.status(201).send('Order Created Successfully!')
    })
})



// GetAllOrderByProductId

app.get('/orders/:productId', (req,res) => {

    const productId = req.params.productId;

    const sql = 'SELECT * FROM ORDERS WHERE productId= $1 GROUP BY productId';

    connection.query(sql, [productId], (error,results) => {

        if (error) return res.status(500).send('Error Retrieving Data from the Database');

        if (results.length === 0 ) return res.status(404).send("Resource Doesn't exist.");

        return res.json(results);
    })
});


// GetAllProductsbyUsername


// GetAllOrdersBy Product name


app.get('/orders/:productName', (req,res) => {

    const { productName } = req.params.productName;

    const sql = 'SELECT * FROM ORDERS INNER JOIN PRODUCTS ON ORDERS.productId = PRODUCTS.id WHERE productName = $1';

    
})

 
