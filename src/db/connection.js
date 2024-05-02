const mongoose = require('mongoose');
const dbUrl = process.env.DB_URI;
console.log('dbUrl', dbUrl);
// Connect to the MongoDB database
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;

// Event handlers for the database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to the database.');
});
