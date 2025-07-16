const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, {
   
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err.message));


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('Server is running on port 5002');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});