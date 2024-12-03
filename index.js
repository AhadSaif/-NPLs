var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const dontev = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))
console.log(__dirname)
app.get('/', function (req, res) {
res.sendFile('dist/index.html')
const AhadURL ='https://api.meaningcloud.com/sentiment-2.1?'
const upikey =process.env.API_KEY
})
app.post('/api',async function(req, res){
 url =req.body.url;
 console.log(`You Intered:${userInput}`);
 const aURL =`${AhadURL}keys=${upikey}&url=${url}&lang=en`
 const response =await fetch(aURL)
 const mcData =await response.json()
 console.log(mcData)
 res.send(mcData)
})
app.listen(8080, function () {
console.log('Example app listening on port 8080!')
})


