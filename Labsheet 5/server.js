const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT =4000;
const routes = require('./Routes/route');

app.use(cors());
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.use('/',routes);

app.listen(PORT,(err)=>{
    if(err)
        console.log(`Error : ${err}`);
    else
        console.log(`Server is running in port ${PORT}`)});

