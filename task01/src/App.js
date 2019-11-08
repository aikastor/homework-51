import React from 'react';
import './App.css';
import americanHistory from './assets/americah-history.jpg';
import yourName from './assets/your-name.jpg';
import prestige from './assets/the prestige.jpg';
import Card from "./Components/Card/Card";


const cards =(
    <div className='container'>
      <Card name='American History X' img={americanHistory} year='1998'/>
      <Card name='Kimi no Na wa' img={yourName} year='2016'/>
      <Card name='The prestige' img={prestige} year='2006'/>
    </div>
);

export default cards;
