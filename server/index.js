const express = require("express");
const body_parser = require("body-parser");
const port = 3000;
const controller = require("./controllers/messages_controller");

const app = express();
app.use(body_parser.json());
app.use(express.static(__dirname + "/../public/build"));

//const messageURL = "/api/messages"

app.post("/api/messages", controller.create);

app.get("/api/messages", controller.read);

app.put("/api/messages/:id", controller.update);

app.delete("/api/messages/:id", controller.delete);

app.listen(port, () => {
  console.log(`Listen on port: ${port}`);
});
