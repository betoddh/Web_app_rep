const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.route('/')
    .get((req, res) => {

        res.sendFile('/index.html');
    })
    .post((req, res) =>{
        var weight = req.body.weight;
        var height = req.body.height;
        res.send("Your BMI is " + (weight / (height*height)));
      });
    


    


app.listen(3000, () =>{
    console.log("on port 3000");
  
  });