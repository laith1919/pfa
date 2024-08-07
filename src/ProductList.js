import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        if (error.response) {
          console.error('Server responded with a status other than 200:', error.response.status);
        } else if (error.request) {
          console.error('Request was made but no response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  
    fetchProducts();
  }, []);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
