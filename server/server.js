const express = require("express");
const bodyParser = require("body-parser");
const getFitness = require("./utils");
const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.post("/", function(req, res) {
  let tours = req.body;
  let fittest = tours[0];

  for (let i = 1; i < tours.length; i++) {
    if (getFitness(fittest) <= getFitness(tours[i])) {
      fittest = tours[i];
    }
  }

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(fittest));
  console.log("Sending data");
});

app.listen(port, () => console.log(`Salesman app listening on port ${port}!`));
