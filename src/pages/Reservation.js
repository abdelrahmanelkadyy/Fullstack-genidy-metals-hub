import React, { useState } from 'react';

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, time, message }),
      });
      if (res.ok) {
        setStatus('Reservation submitted!');
        setName('');
        setEmail('');
        setTime('');
        setMessage('');
      } else {
        setStatus('Failed to submit reservation.');
      }
    } catch (err) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Reservation Time</label>
          <input type="datetime-local" className="form-control" id="time" value={time} onChange={e => setTime(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message / Description</label>
          <textarea className="form-control" id="message" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit Reservation</button>
        {status && <div className="mt-3 alert alert-info">{status}</div>}
      </form>
    </div>
  );
}

export default Reservation; 