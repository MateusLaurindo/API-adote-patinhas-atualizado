const mongoose = require("mongoose");

async function main(){

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://adotepatinhasprofissional:UYDTE7TQXtKbQ9tb@cluster0.desrrjl.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectado ao banco")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main;