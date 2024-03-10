const express = require('express')
const cors = require('cors')

const app = new express();
app.use(express.json());
//client is running in port 3000
//any thord part application can be served, if the cors is enabled 
app.use(cors());

//from browser, the default url triggering is get method
//localhost:8081/home
//1st parameter is address and second parameter is service is service function
app.get('/home',(req,res)=>{
    res.send("It is a Home Page")
})


app.listen(8081);
console.log("server Running");