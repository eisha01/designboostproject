import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());
app.use(json());

// Connect to MongoDB
connect('mongodb://localhost:27017/designboost', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
