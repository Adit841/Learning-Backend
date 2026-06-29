const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt-backend:yvPcHaahhCfw7Rlv@yt-complete-backend.goukrxe.mongodb.net/?appName=yt-complete-backend/project-one")

    console.log("Connected to db")
}

module.exports = connectDB;