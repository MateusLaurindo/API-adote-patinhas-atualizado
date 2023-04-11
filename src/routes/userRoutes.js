const router = require("express").Router();

const UserController = require("../controllers/userController");

router
    .route("/user")
    .post((req, res) => UserController.create(req, res));

router
    .route("/user")
    .get((req, res) => UserController.getAll(req, res));

router
    .route("/user/:id")
    .get((req, res) => UserController.get(req, res));

router
    .route("/user/:id")
    .delete((req, res) => UserController.delete(req, res));

router
    .route("/user/:id")
    .put((req, res) => UserController.update(req, res));


module.exports = router;