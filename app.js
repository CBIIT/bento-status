const express = require('express')
const app = express()

//Defaulting to Port 3000 
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send('Hello from Bento Status')
});

//Reading the Port from the environment variable port 
app.listen(app.get('port'),() =>{
	console.log('Bento Status Listening on Port '+ app.get('port'));
});
