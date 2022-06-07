const express = require("express");
const contactsRouter = require("./routers/contactsRouter");
const laptopsRouter = require("./routers/laptopsRouter");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use('/contacts', contactsRouter);
app.use('/laptops', laptopsRouter);

app.listen(3030);