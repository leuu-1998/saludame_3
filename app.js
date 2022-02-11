const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formP.html");
});

app.post("/", (req, res) => {
  const { nombre } = req.body;

  res.send(`
  <div> 
    <h1>Hola ${nombre}!</h1>
    </div>
  `);
});

app.listen(3000, () => console.log("Listening on port 3000!!!"));
