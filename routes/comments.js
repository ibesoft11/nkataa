var express = require('express');

var router = express.Router();
var commentController = require('../controllers/CommentController');
/* GET users listing. */
router.post('/create', commentController.addComment);
router.get('/', commentController.getComments);
router.get('/delete/:id', commentController.deleteComment);
router.post('/update/:id', commentController.updateComment);
router.get('/search', commentController.getCommentByParam);

module.exports = router;