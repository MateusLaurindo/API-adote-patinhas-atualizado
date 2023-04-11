const mongoose = require("mongoose");

const { Schema } = mongoose;

//const { petSchema } = require("./pet");

const userSchema = new Schema(
    {
        nome: { type: String, require: true },
        email: { type: String, require: true },
        senha: { type: String, require: true },
        telefone: { type: Number, require: true },
        imagem: { type: String, require: true },
        //pet:[petSchema]
    },
    {
        timestamps: true
    }
)

const user = mongoose.model("user", userSchema);

module.exports = {
    user,
    userSchema
}