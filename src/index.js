const express = require('express');
const dbConnect = require('./utils/dbConnection');
const blogRoutes = require('./routes/blogRoutes');


const app = express();
app.use(express.json()); 

dbConnect()
app.use('/api/v1',blogRoutes);

app.listen(3000,()=>{
    console.log('listening');
    
})



