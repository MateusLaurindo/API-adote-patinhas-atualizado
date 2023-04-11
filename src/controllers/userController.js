// const user = require("../models/user");

const { user: userModel } = require("../models/user");

const UserController = {

    create: async (req, res) => {

        try {

            const userId = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                foto: req.body.foto
            }

            const response = await userModel.create(userId)
            res.status(201).json({ response, msg: 'usuário cadastrado com sucesso!' });
        }
        catch (error) {
            console.log(error);
        }
    },


    getAll: async (req, res) => {
        try {
            const users = await userModel.find()

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    get: async (req, res) => {
        const id = req.params.id;


        try {
            const userId = await userModel.findOne({ _id: id })

            if (!userId) {
                res.status(422).json({ message: `${err.message} - id do usuário não encontrado!` });
                return
            }
            res.status(200).json(userId);
        }
        catch (error) {
            res.status(500).json({ error: error })
        }


    },

    
    update: async (req, res) => {


        try {
            const id = req.params.id;

            const userId = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                foto: req.body.foto

            }

            const userUpdate = await userModel.findByIdAndUpdate(id, userId)


            if (!userUpdate) {
                res.status(404).json({ msg: "Usuario não encontrado" })
                return;
            }


            res.status(200).json({ message: `usuário atualizado com sucesso!` });
        }
        catch (error) {

            console.log(error)
        }

    },
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const userId = await userModel.findById(id)

            if (!userId) {
                res.status(404).json({ msg: 'id do usuário não encontrado!' })
                return
            }

            const deleteUser = await userModel.findByIdAndDelete(id);
            res.status(200).json({ deleteUser, msg: 'usuário removido com sucesso!' })
        }
        catch (error) {

            console.log(error)
        }
    }


}

module.exports = UserController;