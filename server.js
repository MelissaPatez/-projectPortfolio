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


if (process.env.NODE_ENV === 'production' ) {
	//Express vai entregar os assets de produção
	// Como por exemplo: man.js ou main.css
	app.use(express.static('frontend/build'));
	
	//Express vai entregar o index.html, se não reconhecer a rota 
	const path =  require('path')
	app.get('*', ( req, res ) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'buil', 'index.html'))
	})
}

// rota front end  --> /api 
app.use(express.urlencoded({ extended: false }));
app.listen(PORT); 