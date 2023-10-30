const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host
  user: 'root',       // Replace with your MySQL user
  password: '1234567890', // Replace with your MySQL password
  database: 'expressdb',   // Replace with your MySQL database
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Create a table (if not exists)
const createTable = `
  CREATE TABLE IF NOT EXISTS data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    field1 VARCHAR(255),
    field2 VARCHAR(255),
    field3 VARCHAR(255),
    field4 VARCHAR(255)
  )
`;

connection.query(createTable, (err) => {
  if (err) {
    console.error('Error creating the table: ' + err.stack);
    return;
  }
  console.log('Table "data" is ready.');
});

// Insert sample data into the table
const insertData = `
  INSERT INTO data (field1, field2, field3, field4)
  VALUES ('Value1', 'Value2', 'Value3', 'Value4')
`;

connection.query(insertData, (err) => {
  if (err) {
    console.error('Error inserting data: ' + err.stack);
    return;
  }
  console.log('Sample data inserted.');
});

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (styles, scripts, etc.)
app.use(express.static('public'));

// Define a route to render data from the table
app.get('/', (req, res) => {
  const query = 'SELECT * FROM data';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying data: ' + err.stack);
      res.render('error.ejs');
      return;
    }
    res.render('index.ejs', { data: results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
