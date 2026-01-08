const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');

const db = require('./Config/Db');
const authRoutes = require('./Routes/auth.js');
const shippingRoutes = require('./Routes/Shipping.js');
const protect = require("./Controller/authmiddleware/authmiddleware.js");
const productRoutes = require('./Routes/Productroutes.js');
const cartRoutes = require('./Routes/Cartroutes.js');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/userdetail", protect, shippingRoutes);
app.use("/api", cartRoutes);

app.get('/', (req, res) => {
  res.send('Server Running');
});

const PORT = process.env.PORT || 5000;

db().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
