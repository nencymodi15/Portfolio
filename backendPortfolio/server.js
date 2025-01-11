const express = require('express');
const app= express();
require('dotenv').config();
const port = process.env.PORT || 3000;


//middleware

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('welcome to my portfolio')
});

//start the server 
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
})