import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayushraj:kiit123@cluster0.drtfu.mongodb.net/fooddelivery').then(() =>
        console.log('DB Connected'));
    }