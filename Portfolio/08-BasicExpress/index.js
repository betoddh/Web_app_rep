const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Inicios</h1>
        <p>Before time began, there was the Cube.<br>
        We know not where it comes from, only that it holds the power to create worlds and fill them with life.<br>
        That is how our race was born. For a time, we lived in harmony.<br>
        But like all great power, some wanted it for good, others for evil. And so began the war.<br>
        A war that ravaged our planet until it was consumed by death, and the Cube was lost to the far reaches of space.<br>
        We scattered across the galaxy, hoping to find it and rebuild our home. Searching every star, every world.<br> And just when all hope seemed lost, a message of a new discovery drew us to an unknown planet called... Earth.</p>
        <input type='text' name='fname' placeholder="First Name"><br/>
        <input type='text' name='lname' placeholder="Last Name"><br/>
        <button type="button">Click Me!</button>
    `);

});

app.get("/about", (req, res) => {
    res.send(`yo can see my youtube channel at <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">my youtube channel</a>`);
});
app.get("/contact", (req, res) => {
    res.send(`yo can contact me at i forgor`);
});



app.listen(3000, () =>{
    console.log("on port 3000");
  
  });