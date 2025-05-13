const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); 

 const userRoutes = require('./routes/userRoutes');
const authRoutes = require("./routes/auth");     
const otpRoutes = require("./routes/otpRoutes"); 


const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

app.use(express.json());
app.use("/api", authRoutes);        
app.use("/api2", otpRoutes);        
app.use('/api/users', userRoutes);
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
};

connectDatabase(); 


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



