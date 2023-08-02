// Import dependencies
const cors = require("cors");
const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const mongoConfig = require("./config/mongoConfig")
// Import Routes
const preferencesRouter = require("./routes/preferences.routes");

// Initialize Server
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080

// Middlewear
app.use(express.json());
app.use(cors());

// Set Routes
app.use("/preferences", preferencesRouter)

// Connect to DB
mongoose.set("strictQuery", true);
mongoose.connect(mongoConfig.url).then(
    () => {
        console.log("Connected to mongodb");
    },
    (err) => {
        console.log("Connection to mongodb failed");
    }
);


// Run Server
app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT} :D`)
});