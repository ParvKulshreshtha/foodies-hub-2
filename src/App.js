
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';
import Signup from './Login/SignUp';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { useState } from 'react';
import OrderPage from './OrderSection/OrderPage';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"))

  const handleLogout = () => {
      localStorage.setItem("authToken", "")
      setAuthToken("")
  }

  const setLocalAuth = (e) => {
    localStorage.setItem("authToken", e)
    setAuthToken(e)
  }
  return (
    <Router>
      <Navbar 
        handleLogout={handleLogout}
        authToken = {authToken}
      />
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={
          <Login 
            setLocalAuth={setLocalAuth}
          /> 
        }/>
        <Route exact path="/order" element={<OrderPage />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
