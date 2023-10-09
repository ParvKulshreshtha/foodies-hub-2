const express = require("express")
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const FoodITEM = require("../models/FoodModels");
const secretKey = "authjwt0102@12342345"
router.post('/createuser', 
body('email').isEmail(),
body('name'),
body('password', "Password must be at least 5 characters").isLength({ min: 5 }),
async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try{
        await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true})
    } catch(error) {
        console.log(error)
        res.json({success:false})
    }
})

router.post('/loginuser',
body('email').isEmail(),
body('password'),
async(req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If passwords don't match, return an error
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JSON Web Token (JWT) for authentication
        const token = jwt.sign({ userId: user._id }, secretKey);

        return res.json({ success:true, token });
    } catch(error) {
        console.log(error)
        res.json({success:false})
    }
})


module.exports = router