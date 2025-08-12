const express = require('express');
const cors = require('cors');
require('dotenv').config();



const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));


app.use('/api/v1',require('./src/routes/index.route'));



const port = process.env.PORT || 3000;
const start = () => {
    try{
        app.listen(port, ()=>{
            console.log(`Server running on port ${port}`);
        });
    }catch(error){
        console.error(`Server run time error ${error.message}`);
        process.exit(1);
    }
}

start();