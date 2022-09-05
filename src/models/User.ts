import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

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

export default model<IUser>('User', userSchema)
