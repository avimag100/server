const express = require('express');
require("dotenv").config();
const mongoConnection = require('./Connect/mongoConnect');
const cors = require('cors');
const router = require('./routes/mainRoutes');

const app = express();

mongoConnection(process.env.MONGO_URL);

app.use(express.json());

app.use(cors({
    origin: process.env.URLS.split(';'),
    methods: ["GET", "PUT", "DELETE", "POST", "PATCH"], // Allowed HTTP methods
    credentials: true,
}));

app.use("/", router);

app.listen(process.env.PORT, () => console.log("server listening on port " + process.env.PORT));
