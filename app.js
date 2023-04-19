const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const conn = require("./src/config/dbConnect");
conn();

const routes = require("./src/routes/index")

app.use("/api", routes);

app.listen(5000, () => {
    console.log("Servidor online!!!!");
})