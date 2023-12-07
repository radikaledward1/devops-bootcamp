import mongoose from "mongoose";

const dbUrl = 'mongodb://localhost:27017/diaries';

const connectDB = async () => {
  try {

    await mongoose.connect(dbUrl)
    console.log('Succesfully connected to MongoDB');

  } catch (error) {

    console.error('Error trying to connect to MongoDB: ', error);
    process.exit(1);
  }
};

export default connectDB;
