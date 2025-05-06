const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());


const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
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