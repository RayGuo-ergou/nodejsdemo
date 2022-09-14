const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// config the database
const uri = 'mysql://root:password@localhost:3306/mydb';

// create connection
const db = mysql.createConnection(uri);

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('MySQL Connected...');
});

// a testing endpoint
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/customer', (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO customers SET ?';

  const customer = { name, email };

  db.query(sql, customer, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Customer created...');
  });
});

module.exports = router;
