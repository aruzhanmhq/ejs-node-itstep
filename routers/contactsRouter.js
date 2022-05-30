const express = require("express");
const contactsRouter = express.Router();

contactsRouter.get('/', (req, res) => {
    res.render('contacts.ejs', {
        email: 'asd',
        phone: '123',
        addresses: ['abaya 24', 'kenesary 40', 'auezova 22', 'orynbor 52']
    })
})




module.exports = contactsRouter;