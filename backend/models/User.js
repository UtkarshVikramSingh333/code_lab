//here we create a mongoose model to communicate with the database

const mongoose=require('mongoose');
const router = require('../api/User');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name:String,
    email: String,
    password :String,
    dateOfBirth :Date
});

const User=mongoose.model('User',UserSchema);

module.exports = User;
