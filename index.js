const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
//const routerApi2 = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.use(cors(options));

app.get('/', (req, res)=>{
  res.send('hola fullstack djcadaniel, este es pmi primer server')
})


routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=> {
  console.log('My port' + port);
})