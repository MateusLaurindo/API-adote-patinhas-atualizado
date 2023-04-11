const mongoose = require("mongoose");

async function main(){

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://mateuslmoraeslima5:h5t43z1mamsJjMsk@cluster0.8rgmkoo.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectado ao banco")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main;