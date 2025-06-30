import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.msg || 'If an account with that email exists, password reset instructions have been sent.');
      setSubmitted(true);
    } catch (err) {
      setMessage('Something went wrong. Please try again later.');
      setSubmitted(true);
    }
  };

  return (
    <div className="container py-5 text-light">
      <h2>Forgot Your Password?</h2>
      {submitted ? (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Reset Link</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword; 