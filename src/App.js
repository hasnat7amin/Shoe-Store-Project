import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart cartData={cartData} setCartData={setCartData} />
          </Route>
          <Route path="/">
            <Home cartData={cartData} setCartData={setCartData} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
