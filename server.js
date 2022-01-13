const express = require('express');
const res = require('express/lib/response');

const app = express();

const PORT = 3080;


//routs get,post,delete...
app.get('/', (req, res) => {
    res.json({
        'success' : true
    });
});

app.get("/portfolio", (req, res) => {
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


app.get("/test", (req, res) => {
    res.send("Funcionou!");
});

app.listen(PORT);