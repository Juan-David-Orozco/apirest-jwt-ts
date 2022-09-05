import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowecase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowecase: true
  },
  password: {
    type: String,
    required: true,
  }
})

export default model('User', userSchema)
