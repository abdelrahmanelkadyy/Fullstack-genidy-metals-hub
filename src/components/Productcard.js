import { Link } from 'react-router-dom';

function ProductCard({ image, title, description, id }) {
  return (
    <div className="card h-100 card-silver">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link
          to={`/products/${id}`}
          className="btn btn-primary view-details-btn mt-3"
          style={{ fontSize: '1.1rem', fontWeight: 600, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)', transition: 'transform 0.15s, box-shadow 0.15s' }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
