const express = require("express")
const FoodITEM = require("../models/FoodModels")
const Category = require("../models/Category")
const router = express.Router()



router.post('/createfood', 
async(req, res) => {
    try{
        await FoodITEM.create({
            name:req.body.name,
            description:req.body.description,
            img:req.body.img,
            category:req.body.category,
            options:req.body.options,
        })
        res.json({success:true})
    } catch(error) {
        console.log(error)
        res.json({success:false})
    }
})

router.get('/foods', async(req, res) => {
    try {
        const foodItems = await FoodITEM.find(); // Assuming FoodItem is your Mongoose model
        console.log(foodItems)
        res.json(foodItems);
      } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

router.get('/category', async(req, res) => {
    try {
        const categories = await Category.find(); // Assuming FoodItem is your Mongoose model
        console.log(categories)
        res.json(categories);
      } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

module.exports = router