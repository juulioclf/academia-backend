const express = require('express');
const router = require('./router')
const cors = require('cors');

const app =  express();

app.use(cors({
    origin: 'http://localhost:3000', // Permitir apenas solicitações da origem específica
    credentials: true // Permitir o uso de credenciais (como cookies)
  }));

app.use(express.json())
app.use(router);

module.exports = app;