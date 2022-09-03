import app from './app'

function main () {
  app.listen(app.get('port'), function(){
    console.log(`Server on port ${app.get('port')}`)
  })
}

main();
