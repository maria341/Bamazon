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
VALUES(115, "Samsung Note 8", "Electronics", 899.00, 100),
(224, "Coach Jacket", "Apparel", 89.75, 30),
(119, "Xbox", "Electronics", 500.00, 40),
(18, "Mr.coffee", "Kitchen", 39.99, 15),
(219, "Hamilton Beach", "Kitchen", 89.50, 30),
(379, "Adidas", "Running shoes", 154.75, 30),
(416, "Nike", "Running shoes", 189.99, 50),
(289, "HP laptop", "Electronics", 799.99, 50),
(196, "Iphone 11", "Electronics", 1200.00, 50),
(458, "Kitchen aid mixer", "Kitchen", 399.99, 40),
(760, "Revlon", "Beauty", 29.75, 50)




