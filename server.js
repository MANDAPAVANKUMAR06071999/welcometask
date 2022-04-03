const express = require('express');
const app = express();
app.use(express.json());


const welcomeController = require('./Controllers/welcomeController');


app.get('/welcome',welcomeController.welcomefun);



app.listen(6002,()=>{
    console.log("Server started and runing at port number 6002");
})

