import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://user:KyJlGoTZ4gFNcUJV@prueba.n0j9zsf.mongodb.net/")
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export default connectDB;