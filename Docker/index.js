const express = require('express');
const app = express();

require("dotenv").config();

app.use(express.json());

console.log(process.env.ENV);


app.get('/', (req,res) => {
    res.json({message: `Welcome, Kim! This is just a test. Running ${process.env.ENV} `})
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});