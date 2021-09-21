const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


app.get('/backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});