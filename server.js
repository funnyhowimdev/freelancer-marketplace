const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_URI_HERE', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API routes
const userRoutes = require('./routes/users');
const projectRoutes = require('./routes/projects');
const paymentRoutes = require('./routes/payments');
const chatRoutes = require('./routes/chat');
const disputeRoutes = require('./routes/disputes');
const reviewRoutes = require('./routes/reviews');
const adminRoutes = require('./routes/admin');

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/disputes', disputeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
