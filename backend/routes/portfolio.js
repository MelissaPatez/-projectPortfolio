const router = require('express').Router();
const { json } = require('body-parser');
const req = require('express/lib/request');
const { updateOne } = require('../models/Portfolio');
const Portfolio = require("../models/Portfolio");


 //new portfolio CREATE
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

//READ ALL
//lista todos os dados do mongodb
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

//READ 
//listar apenas um dado
router.get("/:slug", async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({ slug: req.params.slug });
        res.json({
            success: true,
            data: portfolio
        });

    } catch (err) {
        res.json({
            success: false,
            message: err,
            
        });
    }
});

//Update
router.patch("/:slug", async (req, res) => {
    try {
        const updatePortfolio = await Portfolio.updateOne({
            slug: req.params.slug 
        }, 
        {
            title: req.body.title, 
            description: req.body.description
        })

        res.json({
            success: true,
        })

    } catch (error) {
        res.json({
            success: false,
            message: err,
            
        });
    }
    
});




module.exports  = router;