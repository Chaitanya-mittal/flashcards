var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty123",
});

function createDatabaseIfNotExists(callback) {
  const dbquery = "Create database if not exists flashCardDB";
  con.query(dbquery, (err, results) => {
    if (err) {
      console.log("unable to create the databse");
      callback(err);
    } else {
      console.log("database flashCardDB created");
      callback(null);
    }
  });
}
const createUserTableIfNotExists = `Create Table If Not Exists users(
    _id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;
const flashCardTable = `Create table if not exists flashcards(
        _id INT AUTO_INCREMENT PRIMARY KEY,
        question VARCHAR(255) NOT NULL,
        answer VARCHAR(255) NOT NULL UNIQUE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

function createTableIfNotExists(queryName, callback) {
  con.query(queryName, (err, results) => {
    if (err) {
      console.log("Unable to create table");
      callback(err);
    } else {
      console.log("Table created");
      console.log(results);
      callback(null);
    }
  });
}

createDatabaseIfNotExists((err) => {
  if (err) {
    console.log("Database cannot be created");
    process.exit(1);
  } else {
    con.changeUser({ dbName: "flashCardDB" }, (err) => {
      if (err) {
        console.error("Error selecting database:", err);
        process.exit(1);
      } else {
        console.log("Connected to the specific database");

        con.query("use flashCardDB;", (err) => {
          if (err) {
            console.log(err.message);
            console.log("Unable to select the db");
            process.exit(1);
          } else {
            createTableIfNotExists(createUserTableIfNotExists, (err) => {
              if (err) {
                console.log(err);
                console.log("User table cannot be created");
                process.exit(1);
              } else {
                console.log("table users connected");
              }
            });
            createTableIfNotExists(flashCardTable, (err) => {
              if (err) {
                console.log(err);
                console.log("Flashcard table cannot be created");
                process.exit(1);
              } else {
                console.log("table flashcards connected");
              }
            });
          }
        });
      }
    });
    console.log("Database flashcards connected");
  }
});

module.exports = con;
