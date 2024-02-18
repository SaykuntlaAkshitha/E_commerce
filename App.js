// import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Home from './Home';
import Product from './Product';

import Review from './Review';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
     
        <Route path="product" element={<Product />}>
        
        </Route>
        <Route path ="Review" element={<Review/>}/>
       
      </Routes>
    </>
  );
}

export default App;
