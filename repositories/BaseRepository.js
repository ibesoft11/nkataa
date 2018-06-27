function BaseRepository(model){
    if (!model) throw new Error('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.get = function(options, callback){
    this.model.find(options, callback);
}

BaseRepository.prototype.getWithPopulate = function(options, param, callback){
    this.model.find(options).populate(param).exec(callback);
}

BaseRepository.prototype.add = function(data, callback){
    this.model.create(data, callback);
}

BaseRepository.prototype.getById = function(id, callback){
    this.model.findById(id, callback);
}

BaseRepository.prototype.delete = function(options, callback){
    this.model.remove(options, callback);
}

BaseRepository.prototype.update= function(id, options, callback){
    this.model.findByIdAndUpdate(id, options, callback);
}

module.exports = function(model){
    return new BaseRepository(model);
}