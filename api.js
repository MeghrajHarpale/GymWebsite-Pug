const express = require("express");
const path = require ("path");
const fs = require('fs');
const port =80;
const app = express();


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //for serving static files
app.use(express.urlencoded());//it helps send your form data to the  express



//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname,'views')) //set the views directory



//ENDPOINTS
app.get('/',(req,res)=>{
    const con = 'This is the best content on internet which you can use it wisely';
    const params = { 'title':'PUBG is the best game', 'content':con};
    res.status(200).render('index.pug',params)
});

app.post('/', (req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    
    let outputToWrite = `The name of the client is ${name}, and he/she is ${age} years old, ${gender}. residing at ${address}. More about him/her ${more} `
    fs.writeFileSync('output.txt',outputToWrite);
    const params = { 'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port, ()=>{
    
    console.log(`The application started successfully on port ${port} `);
})