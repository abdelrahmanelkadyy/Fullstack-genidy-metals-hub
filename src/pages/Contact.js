import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Contact Us</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h5>Genidy Aluminium Factory</h5>
          <p><strong>Address:</strong> 123 Industrial Zone, Cairo, Egypt</p>
          <p><strong>Phone:</strong> +20 100 123 4567</p>
          <p><strong>Email:</strong> info@genidyaluminium.com</p>
          <p><strong>Working Hours:</strong> Sat–Thu: 9:00 AM – 5:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="How can we help you?" value={message} onChange={e => setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {status && <div className="mt-3 alert alert-info">{status}</div>}
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/reservation" className="btn btn-success">
          Make a Reservation
        </Link>
      </div>
    </div>
  );
}

export default Contact;
