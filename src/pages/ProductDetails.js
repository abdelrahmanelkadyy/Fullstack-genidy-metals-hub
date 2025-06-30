import { useParams } from 'react-router-dom';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/Window.jpg';
import img3 from '../assets/Door.jpg';

const products = [
  {
    id: '1',
    title: 'Aluminum Window Frame',
    description: 'Durable, sleek window frame with thermal insulation.',
    details: 'Made from high-grade aluminum alloy, resistant to corrosion and thermal bridging.',
    image: img1,
  },
  {
    id: '2',
    title: 'Sliding Door',
    description: 'Smooth, modern sliding door with silver finish.',
    details: 'Ideal for patios and large openings, with noise insulation and locking system.',
    image: img2,
  },
  {
    id: '3',
    title: 'Curtain Wall',
    description: 'Large-scale aluminum glass wall system.',
    details: 'Perfect for commercial buildings with architectural glazing and energy efficiency.',
    image: img3,
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <h2 className="text-center text-danger">Product not found</h2>;

  return (
    <div className="container py-5 text-light">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="img-fluid rounded mb-4" style={{ maxHeight: '400px' }} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Details:</strong> {product.details}</p>
    </div>
  );
}

export default ProductDetails;
