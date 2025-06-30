const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv').config();
const authRouters = require('./routers/auth');
const contactRouters = require('./routers/contact');
const reservationRouters = require('./routers/reservation');


const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDb connected'  )
).catch(err=>console.error(err));

app.use('/api/auth',authRouters);
app.use('/api/contact',contactRouters);
app.use('/api/reservation',reservationRouters);

// Public home page route
app.get('/', (req, res) => {
  res.send('Welcome to the Aluminium Auth Backend Home Page!');
});

const port = process.env.port ||5000;
app.listen(port,()=>console.log(`server running on port ${port}`));