'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req,res)=>{
    res.send('Hola, ¿que ase');
})

app.listen(HOST,PORT);
console.log('Funcionando en http://${HOST}:{PORT}');