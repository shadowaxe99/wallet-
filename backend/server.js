```javascript
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const agents = require('./routes/agents');
const { connectDatabase } = require('./utils/database');
const { encryptData, decryptData } = require('./utils/security');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDatabase();

// Routes
app.use('/api/agents', agents);

// Error handling
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = server;
```