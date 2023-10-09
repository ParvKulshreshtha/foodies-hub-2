import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import FoodCard from './Components/FoodCards';
import { useEffect, useState } from 'react';
import { getCategoryItems, getFoodItems } from './requests/food';

function Home() {
    const [food, setFood] = useState([])
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        getAllFood();
        getAllCategory();
        
    },[])


    const getAllFood = async () => {
        const foodItems = await getFoodItems()
        console.log(foodItems.data)
        setFood(foodItems.data)
    }
    
    const getAllCategory = async () => {
        const categories = await getCategoryItems()
        console.log(categories.data)
        setCategoryData(categories.data)
    }

    const handleAddToCart = () => {
        
    }
  return (
    <div className="Home">
      <div className="app">
        {categoryData?.map((category) => (
          <div key={category._id} className="category-container">
            <div className="category-title">{category.categoryName}</div>
            <div className="food-cards-container">
              {food
                ?.filter((foodItem) => foodItem.category === category.categoryName)
                ?.map((food) => (
                  <FoodCard key={food.id} food={food} handleAddToCart={handleAddToCart} className="food-card" />
                ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
