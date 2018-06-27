var model = require('../models/User');
var service = require('../services/UserService');

exports.getUsers = function(req, res){
    return service.getAllUsers(req, res);
}
exports.addUser = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    return service.addUser(req, res, data);
}
exports.deleteUser = function(req, res){
    var data = req.query;
    return service.deleteUser(req, res, data);
}
exports.getUserByParam = function(req, res){
    var options = req.query;
    return service.getUsersByParam(req, res, options);
}
exports.updateUser = function(req, res){
    var id = req.params.id
    var options = req.body;
    return service.updateUser(req, res, id, options);
}