const { pet: petModel } = require("../models/pet");


const PetController = {
    create: async (req, res) => {
        try {
           
            const petId = {
                nome: req.body.nome,
                raca: req.body.raca,
                card: req.body.card,
                vacinacao: req.body.vacinacao,
                castracao: req.body.castracao,
                descricao: req.body.descricao,
                idade: req.body.idade,
                sexo: req.body.sexo,
                porte: req.body.porte,
                cep: req.body.cep,
                uf: req.body.uf,
                rua: req.body.rua,
                email: req.body.email,
                telefone: req.body.telefone,
                data_de_cadastro: req.body.data_de_cadastro,
                imagem: req.body.imagem,
                user: req.body.user
                

            }

            const response = await petModel.create(petId)

            res.status(201).json({ response, msg: 'pet cadastrado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({ msg: 'Deu errado' })
            
        }
    },

    getAll: async (req, res) => {
        try {
            const pets = await petModel.find()

            res.status(200).json(pets)

        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    get: async (req, res) => {
        const id = req.params.id;

        try {
            const petId = await petModel.findOne({ _id: id })

            if (!petId) {
                res.status(422).json({ msg: "id do pet não encontrado!" });
                return
            }
            res.status(200).json(petId);
        }
        catch (error) {
            res.status(500).json({ error: error })
        }


    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const petId = await petModel.findById(id)

            if (!petId) {
                res.status(404).json({ msg: 'id do pet não encontrado!' })
                return
            }

            const deletePet = await petModel.findByIdAndDelete(id);
            res.status(200).json({ deletePet, msg: 'Pet removido com sucesso!' })
        }
        catch (error) {

            console.log(error)
        }
    },

    update: async (req, res) => {


        try {
            const id = req.params.id;

            const petId = {
                nome: req.body.nome,
                raca: req.body.raca,
                card: req.body.card,
                vacinacao: req.body.vacinacao,
                castracao: req.body.castracao,
                descricao: req.body.descricao,
                idade: req.body.idade,
                sexo: req.body.sexo,
                porte: req.body.porte,
                cep: req.body.cep,
                uf: req.body.uf,
                rua: req.body.rua,
                email: req.body.email,
                telefone: req.body.telefone,
                data_de_cadastro: req.body.data_de_cadastro,
                imagem: req.body.imagem,
               

            }

            const petUpdate = await petModel.findByIdAndUpdate(id, petId)


            if (!petUpdate) {
                res.status(404).json({ msg: " Pet não encontrado" })
                return;
            }


            res.status(200).json({ msg: `Pet atualizado com sucesso!` });
        }
        catch (error) {

            console.log(error)
        }

    }

}

module.exports = PetController;