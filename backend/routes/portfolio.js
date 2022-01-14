const router = require('express').Router();

router.get("/", (req, res) => {
    // ex acess db
    const data = [ {
        id: 1,
        name: "My first project",
        createdAT: '2022-12-01'
    },
    {
        id: 2,
        name: "My second project",
        createdAT: '2022-12-01'
    },
    {
        id: 3,
        name: "My there project",
        createdAT: '2022-12-01'
    },
    {
        id: 4,
        name: "teste",
        createdAT: '2022-12-01'
    },
];

    res.json({
        success: true,
        data: data
    });
});


module.exports  = router;