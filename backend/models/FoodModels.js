const mongoose = require('mongoose');

const foodOptionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Add other fields specific to food options
  });

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      options: [foodOptionSchema],
});

const FoodITEM = mongoose.model('foods', foodSchema);

module.exports = FoodITEM;
