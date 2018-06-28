var repository = require('../repositories/CommentRepository');

exports.getCommentById = function(req, res, id){
    repository.getById(id, function(err, comment){
        if (err) res.json({err:err, message:'error, could not get comment by ID'});
        res.json(comment);
    });
}

exports.getAllComments = function(req, res){
    repository.getWithPopulate({},'post', function(err, comments){
        if (err) res.json({err:err, message:'error, could not retrieve comments'});
        res.json(comments);
    });
}

exports.getCommentByParam = function(req, res, options){
    repository.get(options, function(err, comments){
        if (err) res.json({err:err, message:'error, could not retrieve comments'});
        res.json(comments);
    });
}

exports.addComment = function(req, res, data){
    repository.add(data, function(err){
        if (err) res.json({err:err, message:'error, comment could not be made.'});
        res.json({message: 'comment added successfully'});
    });
}

exports.deleteComment = function(req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err:err, message:'comment could not be deleted'});
        res.json({message: 'comment deleted successfully'});
    });
}

exports.updateComment = function(req, res, id, options){
    repository.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, Comment could not be updated'});
        res.json({message: 'comment updated successfully'});
    });
}