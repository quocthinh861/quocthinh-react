import './App.css';
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar  from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Products from './components/pages/Products'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/products' exact component={Products} ></Route>
          <Route path='/services' exact component={Services} ></Route>
          <Route path='/SignUp' exact component={SignUp} ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
