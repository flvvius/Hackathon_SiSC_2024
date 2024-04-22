const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.get('/getAll', [userController.getAll]);
router.get('/:id', [userController.getUserById]);
router.post('/add', [userController.addUser]);
router.post("/register", [userController.register]);
router.post("/login", [userController.login]);

module.exports = router;
