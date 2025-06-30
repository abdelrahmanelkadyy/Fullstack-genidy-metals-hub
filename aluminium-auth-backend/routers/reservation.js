const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const nodemailer = require('nodemailer');

// Simple admin check (replace with real auth in production)
const ADMIN_EMAIL = 'admin@example.com';

// Email transporter setup (configure with your SMTP details)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/reservation - Create reservation
router.post('/', async (req, res) => {
  try {
    const { name, email, time, message } = req.body;
    if (!name || !email || !time) {
      return res.status(400).json({ msg: 'Name, email, and time are required.' });
    }
    const reservation = new Reservation({ name, email, time, message });
    await reservation.save();
    res.status(201).json({ msg: 'Reservation submitted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error.' });
  }
});

// GET /api/reservation - List all reservations (admin only)
router.get('/', async (req, res) => {
  // Simple admin check: expects ?admin=ADMIN_EMAIL
  if (req.query.admin !== ADMIN_EMAIL) {
    return res.status(403).json({ msg: 'Forbidden' });
  }
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

// PATCH /api/reservation/:id/confirm - Confirm reservation (admin only)
router.patch('/:id/confirm', async (req, res) => {
  if (req.query.admin !== ADMIN_EMAIL) {
    return res.status(403).json({ msg: 'Forbidden' });
  }
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: 'confirmed' },
      { new: true }
    );
    if (!reservation) return res.status(404).json({ msg: 'Not found' });
    
    // Send confirmation email (commented out for now)
    // try {
    //   await transporter.sendMail({
    //     from: process.env.EMAIL_USER,
    //     to: reservation.email,
    //     subject: 'Reservation Confirmed',
    //     text: `Dear ${reservation.name}, your reservation for ${reservation.time} has been confirmed.`,
    //   });
    // } catch (emailError) {
    //   console.error('Email error:', emailError);
    // }
    
    res.json({ msg: 'Reservation confirmed.' });
  } catch (err) {
    console.error('Confirm error:', err);
    res.status(500).json({ msg: 'Server error.' });
  }
});

// PATCH /api/reservation/:id/decline - Decline reservation (admin only)
router.patch('/:id/decline', async (req, res) => {
  if (req.query.admin !== ADMIN_EMAIL) {
    return res.status(403).json({ msg: 'Forbidden' });
  }
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: 'declined' },
      { new: true }
    );
    if (!reservation) return res.status(404).json({ msg: 'Not found' });
    
    // Send decline email (commented out for now)
    // try {
    //   await transporter.sendMail({
    //     from: process.env.EMAIL_USER,
    //     to: reservation.email,
    //     subject: 'Reservation Declined',
    //     text: `Dear ${reservation.name}, unfortunately your reservation for ${reservation.time} was declined.`,
    //   });
    // } catch (emailError) {
    //   console.error('Email error:', emailError);
    // }
    
    res.json({ msg: 'Reservation declined.' });
  } catch (err) {
    console.error('Decline error:', err);
    res.status(500).json({ msg: 'Server error.' });
  }
});

module.exports = router; 