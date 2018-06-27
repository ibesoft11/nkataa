var express = require('express');

var router = express.Router();
var postController = require('../controllers/PostController');
/* GET users listing. */
router.post('/create', postController.addPost);
router.get('/', postController.getPosts);
router.get('/delete/:id', postController.deletePost);
router.get('/search', postController.getPostByParam);
router.post('/update/:id', postController.updatePost);

module.exports = router;