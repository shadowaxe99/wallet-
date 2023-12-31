```javascript
const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
```