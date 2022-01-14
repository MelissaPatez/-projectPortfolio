const express = require('express');
const res = require('express/lib/response');

//buscando conteudo de routes
const api = require("./backend/routes");

const app = express();

const PORT = 3080;


app.use('/api', api)

// rota front end  --> /api 

app.listen(PORT);