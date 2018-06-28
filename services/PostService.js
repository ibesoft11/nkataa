var repository = require('../repositories/PostRepository');

exports.getPostById = function(req, res, id){
    repository.getById(id, function(err, post){
        if (err) res.json({err:err, message:'error, could not get post by ID'});
        res.json(post);
    });
}

exports.getAllPosts = function(req, res){
    repository.getWithPopulate({},'user', function(err, posts){
        if (err) res.json({err:err, message:'error, could not retrieve posts'});
        res.json(posts);
    });
}

exports.getPostByParam = function(req, res, options){
    repository.get(options, function(err, posts){
        if (err) res.json({err:err, message:'error, could not retrieve posts'});
        res.json(posts);
    })
}

exports.addPost = function(req, res, data){
    repository.add(data, function(err){
        if (err) res.json({err:err, message:'error, post could not be created.'});
        res.json({message: 'post created successfully'});
    });
}

exports.deletePost = function(req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err:err, message:'post could not be deleted'});
        res.json({message: 'post deleted successfully'});
    });
}

exports.updatePost = function(req, res, id, options){
    repository.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, post could not be updated'});
        res.json({message: 'post updated successfully'});
    });
}