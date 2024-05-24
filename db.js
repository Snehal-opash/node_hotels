const mongoose = require("mongoose");

// Define mongoURL
const mongoURL = "mongodb+srv://admin:admin@free.vmfb5kn.mongodb.net/hotels";

// Set up MongoDB connecetion
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB server connected");
});
db.on("error", (err) => {
  console.log("MongoDB Connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB server disconnected...");
});

module.exports = db;
