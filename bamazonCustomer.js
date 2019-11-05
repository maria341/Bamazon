let inquirer = require("inquirer");
let mysql = require("mysql");

let connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Bamazon"
});

connection.connect(function(error) {
    if(error) {
        throw error;
    }

    console.log("connected id: " + connection.threadId)
});


function getAllProducts() {
     connection.query("SELECT * FROM products", function(error, results,) {
         if(error) {
             throw error;
            
         }

         console.log(results);
         connection.end();
     })
}