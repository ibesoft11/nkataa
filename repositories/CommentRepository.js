var model = require('../models/Comments');
var BaseRepository = require('../repositories/BaseRepository');

function CommentRepository(){

}
CommentRepository.prototype = BaseRepository(model);
module.exports = new CommentRepository();