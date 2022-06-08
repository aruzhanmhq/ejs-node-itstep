const express = require("express");
const laptopsRouter = express.Router();

let laptopsArray = [
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
        categoryName: "gaming"
    },    
    {
        id: 3,
        model: "Acer Swift",
        price: 180000,
        categoryName: "ultrabook"
    },
    {
        id: 4,
        model: "Acer Aspire",
        price: 230000,
        categoryName: "office"
    },
    {
        id: 5,
        model: "Acer Nitro 5",
        price: 500000,
        categoryName: "gaming"
    },    
    {
        id: 6,
        model: "Asus ZenBook",
        price: 350000,
        categoryName: "ultrabook"
    },
    {
        id: 7,
        model: "Acer Extensa",
        price: 260000,
        categoryName: "office"
    },
    {
        id: 8,
        model: "Asus ROG Strix",
        price: 800000,
        categoryName: "gaming"
    },    
    {
        id: 9,
        model: "Asus Vivobook",
        price: 300000,
        categoryName: "ultrabook"
    },
]

laptopsRouter.get('/', (req, res) => {
    res.render('laptops.ejs', {laptopsArray})
})

laptopsRouter.get('/:categoryName', (req, res) => {
    let categoryName = req.params.categoryName;
    let foundLaptops = laptopsArray.filter(item => item.categoryName == categoryName);

    res.render('laptops.ejs', {
        laptopsArray: foundLaptops
    })
})

module.exports = laptopsRouter;