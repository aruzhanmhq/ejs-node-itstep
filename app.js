const express = require("express");
const contactsRouter = require("./routers/contactsRouter");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use('/contacts', contactsRouter);

app.listen(3030);