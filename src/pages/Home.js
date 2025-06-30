 import heroImage from '../assets/hero.jpg';
import aboutImage from '../assets/about.jpg';
import logoImage from '../assets/b&w logo.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-4">
      
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4">Genidy Aluminium</h1>
          <p className="lead mt-3">
            Premium aluminum products for modern homes and businesses.
          </p>
          <a href="/products" className="btn btn-primary btn-lg mt-3">Browse Products</a>
        </div>
        <div className="col-md-6">
          <img src={logoImage} alt="Hero" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* About Section */}
      <div className="container about-section p-4 rounded mb-5" style={{ backgroundColor: '#1a1a1a' }}>
  <h2 className="text-center mb-4">About Us</h2>
  <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
    Genidy Aluminium is a leading provider of premium aluminum solutions in Egypt. With decades of experience, 
    we deliver high-quality products including windows, doors, frames, and custom designs tailored for modern 
    architecture. 
  </p>
  <div className="text-center mt-3">
  <Link to="/about" className="btn btn-primary">
    Learn More About Us
  </Link>
</div>

  <div className="row align-items-center mt-4">
    <div className="col-md-6">
      <img src={aboutImage} alt="About" className="img-fluid rounded" />
    </div>
    <div className="col-md-6">
      <h3>Why Choose Us?</h3>
      <p>
        We stand out through our commitment to quality, precision manufacturing, and modern design. Whether you're 
        upgrading your home or outfitting a commercial space, we provide the durability and elegance your project needs.
      </p>
    </div>
  </div>
</div>



    </div>
  );
}
export default Home;
