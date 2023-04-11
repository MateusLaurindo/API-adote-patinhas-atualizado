const router = require("express").Router();

const PetController = require("../controllers/petController");

router
    .route("/pet")
    .post((req, res) => PetController.create(req, res));

router
    .route("/pet")
    .get((req, res) => PetController.getAll(req, res));

router
    .route("/pet/:id")
    .get((req, res) => PetController.get(req, res));

router
    .route("/pet/:id")
    .delete((req, res) => PetController.delete(req, res));

router
    .route("/pet/:id")
    .put((req, res) => PetController.update(req, res));


module.exports = router;