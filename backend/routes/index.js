const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const salaRouter = require('./sala');
const locRouter = require('./loc');

router.use("/user", userRouter);
router.use("/sala", salaRouter);
router.use("/loc", locRouter);

module.exports = router;
