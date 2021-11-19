const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.join());

app.use(express.static("public"));

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost:workout",{
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.use(require("./public/api.js"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});