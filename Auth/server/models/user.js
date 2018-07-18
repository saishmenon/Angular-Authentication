// Previous Code

const mongoose = require('mongoose')
// var crypto = require('crypto');

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('user', userSchema, 'users')