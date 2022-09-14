const express = require('express');

const PORT = 5000;
const app = express();
const routers = require('./router');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use the frontend build folder which is the public
app.use(express.static(__dirname + '/public'));

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// use the routers
app.use('/api', routers);

// start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
