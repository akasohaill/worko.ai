// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
