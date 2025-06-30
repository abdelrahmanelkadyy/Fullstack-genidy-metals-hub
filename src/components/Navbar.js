import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('token'));
    // Listen for changes to localStorage (e.g., login/logout in other tabs)
    const onStorage = () => setLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container">
        {/* Brand name in light silver */}
        <Link className="navbar-brand text-light" to="/">Genidy Aluminium</Link>

        {/* Hamburger menu button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light important-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/admin-reservations" style={{ fontSize: '0.9em', opacity: 0.8 }}>Admin</Link>
            </li>
            {/* Auth options */}
            {!loggedIn ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                  <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                  <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-link nav-link text-danger" style={{textDecoration: 'none'}} onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
