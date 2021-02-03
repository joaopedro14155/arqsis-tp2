const { v4: uuid } = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const userSchema = new Schema({
    _id: {type: String, required: true},
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    type: {
        type: String,
        required: true
      }
  })

  class User {

    constructor (email, password, type) {
      this.email = email
      this.password = bcrypt.hashSync(password, salt);
      this.type = type
    }
  }

  class Users{
    constructor () {
        this.userModel = mongoose.model('User', userSchema)
    }

    registerUser(user, callback){
        this.userSchema.findOne({ 'email': user.email }, (err, user) => {
            if (err) {
                this.userSchema.save((err, user) => {
                    if (err) {
                      callback(err, false)
                    }
              
                    callback(null, true)
                })
            }

            callback("Already registered", false)
    }
  }