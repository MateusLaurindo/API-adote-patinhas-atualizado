const mongoose = require("mongoose");

require('dotenv').config()

async function main() {

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("conectado ao banco")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main;