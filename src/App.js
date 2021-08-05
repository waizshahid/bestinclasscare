import { products } from './data';
import Header from "./header";
import CardList from './card-list';

import { useState } from 'react'
import Product from './Product';
import Registration from './Registration';
import {Container,Col,Row,Form} from "react-bootstrap"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
       <Header />
        <Switch>
          <Route exact path="/">
            <CardList products={products}  />
          </Route>
          <Route exact path="/detail/:id">
            <Product/>
          </Route>
          
           <Registration/>
          <Route exact path="/registration">
            <Product/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;





