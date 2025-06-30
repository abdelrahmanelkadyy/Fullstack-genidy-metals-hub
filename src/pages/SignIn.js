import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ← hook for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        setError('');
        setSuccess('Sign in successful! Redirecting...');
        setTimeout(() => navigate('/home'), 1200);
      } else {
        if (data.msg === 'Invalid credentials') {
          setError('Incorrect email or password.');
        } else {
          setError(data.msg || 'Login failed');
        }
      }
    } catch (err) {
      console.error('Error during sign in:', err);
      setError('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <div className="mt-2">
            <Link to="/forgot-password" className="important-link">Forgot your password?</Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</button>
      </form>
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          {success}
        </div>
      )}
      {error && (
        <div className="alert alert-warning mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default SignIn;
