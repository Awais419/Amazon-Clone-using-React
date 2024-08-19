import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import Card from './Card';
import './App.css';

function App() {
  const gamingAccessories = [
    { name: 'Headsets', image: 'headset.png' },
    { name: 'Keyboards', image: 'keyboard.png' },
    { name: 'Computer mice', image: 'mouse.png' },
    { name: 'Chairs', image: 'chair.png' },
  ];

  const fashionDeals = [
    { name: 'Jeans under $50', image: 'jeans.png' },
    { name: 'Tops under $25', image: 'tops.png' },
    { name: 'Dresses under $30', image: 'dresses.png' },
    { name: 'Shoes under $50', image: 'shoes.png' },
  ];

  const refreshSpace = [
    { name: 'Dining', image: 'dining.png' },
    { name: 'Home', image: 'home.png' },
    { name: 'Kitchen', image: 'kitchen.png' },
    { name: 'Health and Beauty', image: 'beauty.png' },
  ];

  const pcDeals = [
    { name: 'Gaming PC', image: 'gaming-pc.png' },
  ];

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Carousel />
      <div className="cards">
        <Card title="Gaming accessories" items={gamingAccessories} />
        <Card title="Shop deals in Fashion" items={fashionDeals} />
        <Card title="Refresh your space" items={refreshSpace} />
        <Card title="Deals in PCs" items={pcDeals} />
      </div>
    </div>
  );
}

export default App;
