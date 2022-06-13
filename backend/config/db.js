import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `Mongo DB connected ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error ${error.message}`.red.bold.underline);
  }
};

export default connectDB;
