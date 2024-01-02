const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/designboost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define MongoDB schema and models here

// Example user schema
const userSchema = new Schema({
  username: String,
  password: String,
});

const User = model('User', userSchema);

// Example signup endpoint
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example signin endpoint
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
