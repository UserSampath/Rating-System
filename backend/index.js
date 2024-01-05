const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
require('dotenv').config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
mongoose.set("strictQuery", true);

app.use("/api/user", userRoutes);



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to the database and listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });