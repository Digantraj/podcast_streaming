const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

module.exports = connectDb;
