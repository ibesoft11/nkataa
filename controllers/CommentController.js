var model = require('../models/Comments');

var service = require('../services/CommentService');

exports.getComments = function(req, res){
    return service.getAllComments(req, res);
}
exports.addComment = function(req, res){
    var data = {
        commentBody: req.body.commentBody,
        user: req.body.user,
        post: req.body.post,
        time: Date.now()
    };
    return service.addComment(req, res, data);
}
exports.deleteComment = function(req, res){
    var data = {_id:req.params.id};
    return service.deleteComment(req, res, data);
}
exports.getCommentByParam = function(req, res){
    var options = req.query;
    return service.getCommentByParam(req, res, options);
}
exports.updateComment = function(req, res){
    var id = req.params.id
    var options = req.body;
    return service.updateComment(req, res, id, options);
}