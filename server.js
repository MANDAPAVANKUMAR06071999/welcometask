const express = require('express');
const app = express();
app.use(express.json());


const welcomeController = require('./Controllers/welcomeController');


app.get('/welcome',welcomeController.welcomefun);



app.listen(7006,()=>{
    console.log("Server started and runing at port number 7006");
})

