const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const res = require('express/lib/response');

//buscando conteudo de routes
const api = require("./backend/routes");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;


app.use('/api', api)

// rota front end  --> /api 

app.listen(PORT);