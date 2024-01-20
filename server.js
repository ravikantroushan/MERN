const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern_project', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
