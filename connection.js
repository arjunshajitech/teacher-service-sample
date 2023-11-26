var mysql = require('mysql');


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'teacher',
  port: 5016
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("MySql DB Connected!");
});

let tableName = "notes"
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id INT PRIMARY KEY AUTO_INCREMENT,
      subject VARCHAR(255),
      sem int,
      note VARCHAR(255)
    )
  `;

connection.query(createTableQuery, (error, results, fields) => {
  if (error) throw error;
  console.log(`Table ${tableName} created successfully`);
});

module.exports = connection;

//reference where db not conncted
//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server?page=1&tab=scoredesc#tab-top