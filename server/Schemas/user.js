const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String
}, { collection: 'users' });

const User = mongoose.model('Users', userSchema);

module.exports = User;
