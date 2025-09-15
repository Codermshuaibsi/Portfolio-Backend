const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Routes
const serviceRoutes = require("./Routes/ServicesRoutes");
const contactRoutes = require("./Routes/contactRoutes")

dotenv.config();
const app = express();

// -------------------- Database Connection --------------------
mongoose
    .connect("mongodb+srv://heyshuaib43_db_user:iQDgkKTYd9c7kep4@cluster0.ucrc8mm.mongodb.net/")
    .then(() => {
        console.log(" Database connected");
    })
    .catch((err) => {
        console.error(" Database connection failed:", err.message);
    });

// -------------------- Middlewares --------------------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -------------------- Routes --------------------

app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1", contactRoutes);

// -------------------- Start Server --------------------
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
