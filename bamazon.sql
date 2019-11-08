CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE items(
item_id INTEGER AUTO_INCREMENT NOT NULL,
productName VARCHAR(100) NOT NULL,
departmentName VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stockQuantity INTEGER(100) NOT NULL,
PRIMARY KEY(item_id)
);

SELECT * FROM items;

INSERT INTO items (item_id, productName, departmentName, price, stockQuantity)
VALUES("Samsung Note 8", "Electronics", 899.00, 100),
("Coach Jacket", "Apparel", 89.75, 30),
("Xbox", "Electronics", 500.00, 40),
("Mr.coffee", "Kitchen", 39.99, 15),
("Hamilton Beach", "Kitchen", 89.50, 30),
("Adidas", "Running shoes", 154.75, 30),
("Nike", "Running shoes", 189.99, 50),
("HP laptop", "Electronics", 799.99, 50),
("Iphone 11", "Electronics", 1200.00, 50),
("Kitchen aid mixer", "Kitchen", 399.99, 40),
("Revlon", "Beauty", 29.75, 50)




