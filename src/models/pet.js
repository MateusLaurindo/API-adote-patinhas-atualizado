const mongoose = require("mongoose");

const { Schema } = mongoose;

//const { userSchema } = require("./user");

const petSchema = new Schema(
    {
        nome: { type: String, require: true },
        raca: { type: String, require: true },
        card: { type: Boolean, require: true },
        vacinacao: { type: Boolean, require: true },
        castracao: { type: Boolean, require: true },
        descricao: { type: String, require: true },
        idade: { type: Number, require: true },
        sexo: { type: Boolean, require: true },
        porte: { type: String, require: true },
        cep: { type: Number, require: true },
        uf: { type: String, require: true },
        rua: { type: String, require: true },
        email: { type: String, require: true },
        telefone: { type: Number, require: true },
        data_de_cadastro: { type: Date, require: true },
        imagem: { type: String, require: true },
        user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
        //user: [userSchema]
    },
    {
        timestamps: true
    }
)

const pet = mongoose.model("pet", petSchema);

module.exports = {
    pet,
    petSchema
}