let mysql = require("mysql");
let inquirer = require("inquirer");
let Table = require("cli-table");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password29",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }

    console.log(`Successfully connected as id ${connection.threadId}`);
    managerInput();
});

function managerInput() {
    inquirer.prompt([
        {
            type: "list",
            name: "input",
            message: "What I can help you today?",
            choices: ['1) View items for sale', '2) View low inventory', '3) Add to inventory', '4) Add new item']
        }
    ])
        .then(function (answer) {
            if (answer.input === '1) View items for sale') {
                connection.query("SELECT * FROM items", function (error, results) {
                    if (error) throw error;

                    //console.log(results);

                    for (var i = 0; i < results.length; i++) {
                        console.log("ID: " + results[i].item_id);
                        console.log("Product Name: " + results[i].productName);
                        console.log("Department: " + results[i].departmentName);
                        console.log("Price: " + results[i].price);
                        console.log("Stock Quantity: " + results[i].stockQuantity);
                    }

                    newTransaction();
                })
            }
            else if (answer.input === '2) View low inventory') {
                connection.query('SELECT * FROM items WHERE StockQuantity < 5', function (error, results) {
                    if (error) throw error;
                    console.log('')
                    console.log('===========LOW INVENTORY===========');
                    console.log("===================================")
                    for (i = 0; i < results.length; i++) {
                        console.log('ID: ' + results[i].item_id);
                        console.log('Product Name: ' + results[i].productName);
                        console.log('Department: ' + results[i].departmentName);
                        console.log("Stock Quantity: " + results[i].stockQuantity);
                    }
                    //	newTransaction();
                })
            }
        })
}
