import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "podtube",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database");
  }
};

export default connectDb;
