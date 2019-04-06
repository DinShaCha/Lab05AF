'use static'

const express = require ('express');

const app = express();

app.use(express.static(_dirname));

app.get('/', (req, res, next)=> {
    res.sendFile('index.html')
});

app.listen(3000,err=>{

    if(err){
        console.error(err)
        return;
    }
    console.log('app lsitening on port 3000')
});
