import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test')
  .then(db => console.log('Dtabase is conected'))
  .catch(err => console.log(err))