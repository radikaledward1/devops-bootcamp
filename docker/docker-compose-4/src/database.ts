import mongoose from "mongoose";
import logger from "./utils/logger";
// import { datadogLogs } from "@datadog/browser-logs";

const dbUrl = 'mongodb://localhost:27017/diaries';

const connectDB = async () => {
  try {

    await mongoose.connect(dbUrl)
    // console.log('Succesfully connected to MongoDB');
    logger.info('Succesfully connected to MongoDB');
    // datadogLogs.logger.info('Succesfully connected to MongoDB');

  } catch (error: any) {

    // console.error('Error trying to connect to MongoDB: ', error);
    logger.error('Error trying to connect to MongoDB: ', error);
    // datadogLogs.logger.error('Error trying to connect to MongoDB: ', {}, error);
    process.exit(1);
  }
};

export default connectDB;
