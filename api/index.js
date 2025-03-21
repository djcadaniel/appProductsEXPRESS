const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
//const routerApi2 = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.use(cors(options));

app.get('/api', (req, res)=>{
  res.send('hola fullstack djcadaniel, este es pmi primer server')
})


routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=> {
  console.log('My port' + port);
})