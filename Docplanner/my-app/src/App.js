import React, { Fragment } from 'react';
import Nav from './components/nav.js';
import Stats from './components/Statistics';
import Section from './components/section';
import Countries from './components/countries';
import Footer from './components/footer';
import {Navmenu,stat,countries, improve } from "./components/data"
import './App.css';



function App() {
  return (
    <div className="app">
   <Nav property={Navmenu}/>
  <Stats s ={stat}/>
  <Section improve = {improve} /> 
  <Countries countries={countries}/>
    <Footer/>

    </div>

  );
}

export default App;
