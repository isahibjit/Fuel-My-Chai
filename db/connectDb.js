import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connections[0].readyState) return;
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
 
};

export default connectDb;
