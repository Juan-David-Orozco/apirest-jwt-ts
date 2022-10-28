import mongoose from 'mongoose'
import { MONGODB_URI } from './config'

mongoose.connect(MONGODB_URI)
  .then(db => console.log(`DB is conected: ${db.connection.name}`))
  .catch(err => console.log(err))