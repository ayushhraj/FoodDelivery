require('dotenv').config();
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('DB Connected');
    }).catch((error) => {
        console.error('DB Connection Error:', error);
    });
};
