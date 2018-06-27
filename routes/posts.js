var express = require('express');

var router = express.Router();
var postController = require('../controllers/PostController');
/* GET users listing. */
router.post('/create', postController.createPost);
router.get('/', postController.viewPosts);
router.get('/delete/:id', postController.deletePost);
router.post('/edit', postController.editPost);
router.get('/user/:userId', postController.viewPostsByUser);

module.exports = router;
