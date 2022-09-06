import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/db_api_jwt')
  .then(db => console.log('DB is conected'))
  .catch(err => console.log(err))