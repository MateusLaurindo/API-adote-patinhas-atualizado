const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000
const conn = require("./src/config/dbConnect");
conn();

const routes = require("./src/routes/index")

app.use("/api", routes);

app.listen(port, () => console.log("aee caraiii"))