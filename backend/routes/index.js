const router = require('express').Router();

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