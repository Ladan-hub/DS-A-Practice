USERS

Column Name	Data Type	Constraints
id	SERIAL	PRIMARY KEY
username	VARCHAR(255)	NOT NULL
email	VARCHAR(255)	NOT NULL
password	VARCHAR(255)	NOT NULL



PRODUCTS

Column Name	Data Type	Constraints
id	SERIAL	PRIMARY KEY
name	VARCHAR(255)	NOT NULL
description	TEXT	



ORDERS

Column Name	Data Type	Constraints
id	SERIAL	PRIMARY KEY
user_id	INTEGER	NOT NULL
product_id	INTEGER	NOT NULL
quantity	INTEGER	NOT NULL
order_date	TIMESTAMP	DEFAULT NOW()


const express = require('express');
const app = express();
const pg = require('pg');

const connection = new pg.Client({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    db: 'mydatabase',
    port: 5432
})


// Get all users and their orders

app.get('/orders', async (req,res) => {

    const sql = ' SELECT USERS.*, ORDERS.id, ORDERS.product_id, ORDERS.quantity, ORDERS.order_date FROM USERS INNER JOIN ORDERS ON USERS.id = ORDERS.user_id'; 

    // const results = await connection.query(sql);
    
    connection.query(sql, (error, results) => {

        if (error) return res.status(500).send('Error Retrieving the Data from the Database');

        if (results.length === 0) return res.status(404).send('Resource Not Found');

        return res.json(results);
    })
})


