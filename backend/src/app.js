const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createDatabaseInstance = require('../../database/database.js');
const db = createDatabaseInstance(false);

const usersRoute = require('./routes/users')(db);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use route files
app.use('/api/users', usersRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db.connect();
});