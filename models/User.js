var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
   name: String,
   email: { type: String, unique: true},
   password: String,
   posts: [{type: mongoose.Schema.Types.Array, ref: 'Post'}],
});

module.exports = mongoose.model('User', UserSchema);