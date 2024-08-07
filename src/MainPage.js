import React from 'react';
import ProductList from './ProductList';
const products = [
  {
    name: 'Gaming PC',
    price: '$1200',
    description: 'High-performance gaming PC with the latest specs.',
    image: 'link-to-image-1'
  },
  {
    name: 'Wireless Mouse',
    price: '$25',
    description: 'Ergonomic wireless mouse with fast response.',
    image: 'link-to-image-2'
  },
  {
    name: 'CPU - Ryzen 7',
    price: '$300',
    description: 'Powerful AMD Ryzen 7 processor for demanding tasks.',
    image: 'link-to-image-3'
  },
  {
    name: 'Bluetooth Speaker',
    price: '$50',
    description: 'Portable Bluetooth speaker with excellent sound quality.',
    image: 'link-to-image-4'
  }
];

function MainPage() {
  return (
    <div className="MainPage">
      {/* Header */}
      <header>
        <div className="logo">
          <h1>My Web Store</h1>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>PC</li>
          <li>Périphérique</li>
          <li>Composants</li>
          <li>Autres</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
      </div>

      {/* Recommended Products */}
      <div className="recommended-products">
       <ProductList/>
          </div>
        
      </div>
  
  );
}


export default MainPage;
