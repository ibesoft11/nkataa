var express = require('express');

var router = express.Router();
var postController = require('../controllers/PostController');
/* GET users listing. */
// router.post('/create', postController.createPost);
// router.get('/', postController.viewPosts);
// router.get('/delete/:id', postController.deletePost);
// router.post('/edit', postController.editPost);
// router.get('/user/:userId', postController.viewPostsByUser);

router.post('/create', postController.createPost);
router.get('/', userController.getUsers);
router.get('/delete/:id', userController.deleteUser);
router.get('/search', userController.getUserByParam);
router.post('/update/:id', userController.updateUser);

module.exports = router;
