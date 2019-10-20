const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	age: Number,
});

/*
mongoose.Schema({
	username: String,
	password: String,
	userinfo:
});
*/

module.exports = mongoose.model('Posts', PostSchema);
