const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/users', userController.getAllUsers);

router.post('/users', userController.createUser);

/**
 * Tarea para la casa:
 * Realizar put y delete
 */

module.exports = router;