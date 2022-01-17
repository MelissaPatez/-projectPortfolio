const router = require('express').Router();
const Portfolio = require("../models/Portfolio");

router.get("/", (req, res) => {
    
    res.json({
        success: true,
    });
});

 //new portfolio
router.post("/", (req, res) => {
    const portfolio =  new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    //salvar, oq acontece quando da certo e errado
    portfolio
        .save()
        .then((data) => {
            res.json({
                success: true,
                data
            });
        })
        .catch((err) => {
            res.json({
                success: false,
                message: err,
                
            });
            
        });
});

module.exports  = router;