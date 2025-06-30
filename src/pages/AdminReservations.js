import React, { useState, useEffect } from 'react';

function AdminReservations() {
  const [reservations, setReservations] = useState([]);
  const [adminEmail, setAdminEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [status, setStatus] = useState('');

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (adminEmail === 'admin@example.com') {
      setIsAuthenticated(true);
      fetchReservations();
    } else {
      setStatus('Invalid admin email');
    }
  };

  const fetchReservations = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reservation?admin=${adminEmail}`);
      if (res.ok) {
        const data = await res.json();
        setReservations(data);
      } else {
        setStatus('Failed to fetch reservations');
      }
    } catch (err) {
      setStatus('Error fetching reservations');
    }
  };

  const handleConfirm = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/reservation/${id}/confirm?admin=${adminEmail}`, {
        method: 'PATCH'
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Reservation confirmed successfully!');
        fetchReservations(); // Refresh the list
      } else {
        setStatus(`Failed to confirm reservation: ${data.msg || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Confirm error:', err);
      setStatus('Error confirming reservation');
    }
  };

  const handleDecline = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/reservation/${id}/decline?admin=${adminEmail}`, {
        method: 'PATCH'
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Reservation declined successfully!');
        fetchReservations(); // Refresh the list
      } else {
        setStatus(`Failed to decline reservation: ${data.msg || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Decline error:', err);
      setStatus('Error declining reservation');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-5 text-light">
        <h2 className="mb-4">Admin Login</h2>
        <form onSubmit={handleAdminLogin} className="bg-dark p-4 rounded">
          <div className="mb-3">
            <label htmlFor="adminEmail" className="form-label">Admin Email</label>
            <input
              type="email"
              className="form-control"
              id="adminEmail"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          {status && <div className="mt-3 alert alert-info">{status}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Admin - Manage Reservations</h2>
      {status && <div className="alert alert-info mb-3">{status}</div>}
      
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Message</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.name}</td>
                <td>{reservation.email}</td>
                <td>{formatDate(reservation.time)}</td>
                <td>{reservation.message || '-'}</td>
                <td>
                  <span className={`badge ${
                    reservation.status === 'confirmed' ? 'bg-success' :
                    reservation.status === 'declined' ? 'bg-danger' : 'bg-warning'
                  }`}>
                    {reservation.status}
                  </span>
                </td>
                <td>{formatDate(reservation.createdAt)}</td>
                <td>
                  {reservation.status === 'pending' && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleConfirm(reservation._id)}
                      >
                        Confirm
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDecline(reservation._id)}
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {reservations.length === 0 && (
        <div className="text-center mt-4">
          <p>No reservations found.</p>
        </div>
      )}
    </div>
  );
}

export default AdminReservations; 