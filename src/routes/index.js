const router = require("express").Router();

const { Router } = require("express");

const petRouter = require("./petRoutes");

router.use("/", petRouter);

//router user

const userRouter = require("./userRoutes");

router.use("/", userRouter);


module.exports = router;
