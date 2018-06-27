var model = require('../models/Post');

var service = require('../services/PostService');

exports.getPosts = function(req, res){
    return service.getAllPosts(req, res);
}
exports.addPost = function(req, res){
    var data = {
        postBody: req.body.name,
        user: req.body.email,
    };
    return service.addPost(req, res, data);
}
exports.deletePost = function(req, res){
    var data = {_id:req.params.id};
    return service.deletePost(req, res, data);
}
exports.getPostByParam = function(req, res){
    var options = req.query;
    return service.getPostByParam(req, res, options);
}
exports.updatePost = function(req, res){
    var id = req.params.id
    var options = req.body;
    return service.updatePost(req, res, id, options);
}