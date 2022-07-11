import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Hero from './Hero/Hero'
import Collections from './Collections/Collections'
import Sale from './Sale/Sale'
import News from './News/News'
import ProductCard from './ProductCard/ProductCard'
import YourOrder from './YourOrder/YourOrder'
import LoginForm from './LoginForm/LoginFrom'

import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={ <Hero />}/>
        <Route  path="/collection" element={ <Collections />} />
        <Route  path="/sale" element={ <Sale />} />
        <Route  path="/news" element={ <News />} />
        <Route  path="/products" element={ <ProductCard />} />
        <Route  path="/payment" element={ <YourOrder />} />
        <Route  path="/login" element={<LoginForm />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
