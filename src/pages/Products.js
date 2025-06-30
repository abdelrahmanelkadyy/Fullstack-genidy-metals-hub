import React from 'react';
import ProductCard from '../components/Productcard';
import img1 from '../assets/Window.jpg'; // Add your images to /assets/
import img2 from '../assets/Door.jpg';
import img3 from '../assets/P5.jpg';

function Products() {
  const products = [
    {
      id: 1,
      title: 'Aluminum Window Frame',
      description: 'Durable, sleek window frame with thermal insulation.',
      image: img1,
    },
    {
      id: 2,
      title: 'Sliding Door',
      description: 'Smooth, modern sliding door with silver finish.',
      image: img2,
    },
    {
      id: 3,
      title: 'Curtain Wall',
      description: 'Large-scale aluminum glass wall system.',
      image: img3,
    },
  ];

  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map(product => (
  <div key={product.id} className="col-md-4 mb-4">
    <ProductCard 
      id={product.id}                        // 👈 pass the ID
      image={product.image} 
      title={product.title} 
      description={product.description} 
    />
  </div>
))}

      </div>
    </div>
  );
}

export default Products;
