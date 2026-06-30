const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('db is connected');
    } catch (err) {
        console.error('DB connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;