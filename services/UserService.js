var repository = require('../repositories/UserRepository');

exports.getUserById = function(req, res, id){
    repository.getById(id, function(err, user){
        if (err) res.json({err:err, message:'error, could not get user by ID'});
        res.json(user);
    });
}

exports.getAllUsers = function(req, res){
    repository.get({}, function(err, users){
        if (err) res.json({err:err, message:'error, could not retrieve users'});
        res.json(users);
    });
}

exports.getUsersByParam = function(req, res, options){
    repository.get(options, function(err, users){
        if (err) res.json({err:err, message:'error, could not retrieve user record'});
        res.json(users);
    })
}

exports.addUser = function(req, res, data){
    repository.add(data, function(err){
        if (err) res.json({err:err, message:'error, user could not be created.'});
        res.json({message: 'user created successfully'});
    });
}

exports.deleteUser = function(req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err:err, message:'user could not be deleted'});
        res.json({message: 'user deleted successfully'});
    });
}

exports.updateUser = function(req, res, id, options){
    repository.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, user record could not be updated'});
        res.json({message: 'user record updated successfully'});
    });
}