import React, { useEffect, useState } from 'react';
import './FoodCard.css'; // Make sure to use the correct CSS file for styling

function FoodCard({food, handleAddToCart}) {
  const { _id, name, description, img, options } = food;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(options[0]._id)
  },[])

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleOptionChange = (event) => {
    console.log(event.target.value)
    setSelectedOption(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="food-card">
      <img src={img} alt={name} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">{name}</h3>
        <p className="food-description">{description}</p>
        {/* <p className="food-price">${price.toFixed(2)}</p> */}
        <div className="quantity-input">
          <label htmlFor={`quantity-${_id}`}>Quantity:</label>
          <div className="quantity-controls">
            <button className="quantity-decrement" onClick={decrementQuantity}>-</button>
            <input
              type="number"
              id={`quantity-${_id}`}
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button className="quantity-increment" onClick={incrementQuantity}>+</button>
          </div>
        </div>
        <div className="option-selector">
          <label htmlFor={`option-${_id}`}>Select Option:</label>
          <select
            id={`option-${_id}`}
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {console.log(options)}
            {options?.map(opt => <option key={opt._id} value={opt._id}>{opt.name}</option>)}
            
          </select>
        </div>
        <h3 className="food-name">{selectedOption && options.find(opt => opt._id === selectedOption).price}</h3>
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
