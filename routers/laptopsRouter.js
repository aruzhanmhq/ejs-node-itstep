const express = require("express");
const laptopsRouter = express.Router();

let laptopsArr = [
    {
        id: 1,
        model: "Lenovo Ideapad",
        price: 150000,
        categoryName: "office"
    },
    {
        id: 2,
        model: "Lenovo ThinkPad",
        price: 200000,
        categoryName: "game"
    },    
    {
        id: 3,
        model: "Acer Swift",
        price: 180000,
        categoryName: "ultrabook"
    }
]

laptopsRouter.get('/', (req, res) => {
    res.render('laptops.ejs', {
        laptopsArray: laptopsArr
    })
})

module.exports = laptopsRouter;