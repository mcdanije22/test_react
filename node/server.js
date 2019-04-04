// const http = require('http');

// const server = http.createServer((req, resp)=>{
//     console.log(req.method)
//     console.log('url',req.url)
//     const user = {
//         name:'john',
//         hobby:'coding'
//     }
//     resp.setHeader('content-type', 'application/json');
//     resp.end(JSON.stringify(user));
// })

// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.get('/', (req, res)=>{
  
    res.send('getting root');
})

app.get('/profile', (req, res)=>{
  
    res.send('getting profile')
})

// app.use((req, res, next)=>{
//     console.log('<h1>hellooooo</h1>')
//     next();
// })

app.post('/profile', (req, res)=>{
    console.log(req.body)
    res.send('success')
})
app.listen(3000);