const router = require('express').Router();
const { json } = require('body-parser');
const Portfolio = require("../models/Portfolio");

//lista dados do mongodb
router.get("/", async (req, res) => {
    try{
        const portfolio = await Portfolio.find();

        res.json({
            success: true,
            data: portfolio
        });
    }catch(err){
        res.json({
            success:false,
            message: err,
        })
       
    }
    
});

 //new portfolio
router.post("/", (req, res) => {
    const portfolio =  new Portfolio({
        title: req.body.title,
        description: req.body.description,
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