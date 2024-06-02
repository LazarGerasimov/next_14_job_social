import mongooose from 'mongoose';

const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:<${process.env.MONGODB_PASSWORD}>@cluster0.sa9rmqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

if (!connectionString) {
  throw new Error("Please provide a valid connection string");
}

const connectDB = async () => {
  if (mongooose.connection?.readyState >= 1) {
    console.log("Already connected to DB");
    return;
  }

  try {
    console.log("...Connecting to MongoDB...")
    await mongooose.connect(connectionString);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}

export default connectDB;

