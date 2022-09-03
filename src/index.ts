import app from './app'

import './database'

function main () {
  app.listen(app.get('port'), function(){
    console.log(`Server on port ${app.get('port')}`)
  })
}

main();
