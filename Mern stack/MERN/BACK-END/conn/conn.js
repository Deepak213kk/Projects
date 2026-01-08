const mongoose = require('mongoose');

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://ompandeyit69:131205om@cluster01.hsfaw.mongodb.net/?appName=Cluster01", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error); // Log the full error
    res.status(500).json({ message: "Database connection failed", error: error.message });
  }
};

conn();
