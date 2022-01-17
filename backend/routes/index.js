const router = require('express').Router();


require("../db/mongoConnection");
//testar se foi conectado ao mongo db --> backend/db/mongoConnection.js
/* mongoose.connect(process.env.MONGO_URL_CONNECT, {useNewPasser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongodb");
}); */ 

//busca conteudo do arquivo portfolio.js
const portfolio = require('./portfolio');


router.get("/", (req, res) =>{
    res.json({
        success: false,
        message: "Please, do not call /api, it is for our server"
    })
})

//chama função do arquivo portfolio.js
router.use('/portfolio', portfolio)

module.exports = router;