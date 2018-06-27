var express = require('express');

var router = express.Router();
var commentController = require('../controllers/CommentController');
/* GET users listing. */
router.post('/create', commentController.addComment);
router.get('/post/:post', commentController.viewComments);
router.get('/delete/:id', commentController.deleteComment);

module.exports = router;
