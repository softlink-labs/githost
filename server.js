require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;
const serveIndex = require('serve-index');
const path = require('path');
const cors = require('cors');
// Cors 
const corsOptions = {
  //  origin: process.env.ALLOWED_CLIENTS.split(',')
  origin:'*'
  
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors(corsOptions))
app.use(express.static('uploads'));
app.use("/p",express.static('public'))

// const connectDB = require('./config/db');
// connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
// app.use('/api/files', require('./routes/files'));
// app.use('/files', require('./routes/show'));
// app.use('/files/download', require('./routes/download'));
app.use('/link',require('./routes/link'))
























//@@@@@@@@@@@@@@@@@@@@@@@@@@
 app.get('/',(req,res)=>{
   console.log('index')
   res.render('index')

 })


// app.get('/l',(req,res)=>{
//   console.log('link')
//   res.render('link')
// })



//@@@@@@@@@@@@@@@@@@@@@@@@
//  app.use('/*',require('./routes/create2'))

// let dir2 ='r'
// let dir = 'C:\\Users\\jay\\Desktop\\netlify\\netlify\\uploads'

// app.use((req,res,next) =>{
//  reu = req.url.substring(1)
// dir2 = dir+'/'+'angelabauer/'
// console.log(dir2)
// next()
// })


// app.use('/'+reu,require('./routes/create2'))

// app.use('/*',
// serveIndex( dir+'/',{ icons: true })
// ); 

try {
  if(true){

  app.get(
    '/*',
    express.static('uploads'),
    serveIndex('uploads', { icons: true })
  )
}
} catch (error) {
}

app.use('/*',require('./routes/create'))


app.listen(PORT, console.log(`Listening on port ${PORT}.`));