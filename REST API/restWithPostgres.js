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



// Get all users and their orders

