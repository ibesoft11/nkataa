var express = require('express');

var router = express.Router();
var userController = require('../controllers/UserController');
/* GET users listing. */
router.post('/create', userController.addUser);
router.get('/', userController.getUsers);
router.get('/delete/:id', userController.deleteUser);
router.get('/search', userController.getUserByParam);
router.post('/update/:id', userController.updateUser);

module.exports = router;