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

  });

let start = function() {
    connection.query("SELECT * FROM items", function(error, results){
        if(error) throw error;

        let table = new Table({
            head: ["ID", "Product Name", "Depatment Name", "Price", "Stock Quantity"],
            colWidths: [10, 25, 25, 15, 20]
        });
        //console.log(results);

        for(var i=0; i<results.length; i++) {
            table.push([results[i].item_id, results[i].productName, results[i].departmentName,
             results[i].price, results[i].stockQuantity]);
        }
        console.log(table.toString());

        inquirer.prompt([
            {
                name: "ID",
                type: "input",
                message: "What is the ID # of the item you want to purchase?",
                validate: function(value) {
                    if(isNaN(value) == false) {
                        return true
                    }
                    else{
                        return false;
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                messagea: "How many would you like to purchase?",
                validate: function(value) {
                    if(isNaN(value)== false) {
                        return true
                    }
                    else{
                        return false;
                    }
                }
            }
        ])
        .then(function(answer) {
            var quantity = answer.quantity;
            var itemId = answer.item_id;
            connection.query('SELECT * FROM items WHERE ?', [{
                item_id: itemId
            }], function(err, selectedItem) {

                if (err) throw err;
                if (selectedItem[0].stockQuantity - quantity >= 0) {

                    var orderTotal = quantity * selectedItem[0].price;
                    
                    console.log('We have enough (' + selectedItem[0].productName + ')!');
                    console.log('Quantity in stock: ' + selectedItem[0].stockQuantity + ' Order quantity: ' + quantity);
                    console.log('You will be charged $' + orderTotal + '. Thank you!');

                    connection.query('UPDATE items SET stockQuantity=? WHERE id=?', [selectedItem[0].stockQuantity - quantity, itemId],
                        function(err, inventory) {
                            if (err) throw err;
                           // orderAgain();
                        })
                } else {
                    console.log('Insufficient quantity.  Please adjust your order, we only have ' + selectedItem[0].stockQuantity + ' ' + selectedItem[0].productName + 'in stock.');
                   // orderAgain();
                }
            });
        });
    });
}
        
    
start();